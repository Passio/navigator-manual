// Natural-language search over the manual, entirely in the browser.
//
// The query is embedded locally with the same model the build used, so there is
// no API key, no server and no per-query cost. Vectors are precomputed at build
// time (manual/embed.js) and L2-normalised, which makes cosine similarity a
// plain dot product.
//
// Model and prefix must match manual/embed.js exactly or the vectors are
// meaningless -- they are asserted against the index below.

var MODEL = 'Xenova/bge-small-en-v1.5'
var PREFIX = 'Represent this sentence for searching relevant passages: '
var LIMIT = 8

// MANUAL_BASE is the page-relative path to the site root, set by overrides/main.html.
var root = new URL(window.MANUAL_BASE || './', window.location.href).href

var state = {index: null, vectors: null, embed: null, loading: null}

function el (tag, attr, children) {
  var node = Object.assign(window.document.createElement(tag), attr || {})
  for (var child of children || [])
    node.append(child)
  return node
}

async function load (onProgress) {
  if (state.loading)
    return state.loading
  state.loading = (async () => {
    onProgress('Loading search index…')
    var [index, vectors] = await Promise.all([
      fetch(root + 'assets/search-index.json').then(d => d.json()),
      fetch(root + 'assets/search-vectors.bin').then(d => d.arrayBuffer())
    ])
    if (index.model != MODEL)
      throw new Error(`index was built with ${index.model}, expected ${MODEL}`)
    state.index = index
    state.vectors = new Float32Array(vectors)
    onProgress('Loading language model (one time, ~30 MB)…')
    var {pipeline, env} = await import('https://cdn.jsdelivr.net/npm/@huggingface/transformers@3.7.5/dist/transformers.min.js')
    env.allowLocalModels = false
    state.embed = await pipeline('feature-extraction', MODEL, {dtype: 'q8'})
  })().catch(err => {
    state.loading = null
    throw err
  })
  return state.loading
}

async function search (query) {
  var out = await state.embed(PREFIX + query, {pooling: 'mean', normalize: true})
  var q = out.data
  var {dim, chunk} = state.index
  var score = chunk.map((d, i) => {
    var sum = 0
    for (var j = 0; j < dim; j++)
      sum += q[j] * state.vectors[i * dim + j]
    return {chunk: d, score: sum}
  })
  // Best-scoring chunk per page, so one long page cannot fill the results.
  var best = {}
  for (var d of score.sort((a, b) => b.score - a.score))
    if (!best[d.chunk.url] || best[d.chunk.url].score < d.score)
      best[d.chunk.url] = d
  return Object.values(best).sort((a, b) => b.score - a.score).slice(0, LIMIT)
}

function open () {
  var status = el('div', {className: 'nlq-status'})
  var results = el('div', {className: 'nlq-results'})
  var input = el('input', {className: 'nlq-input', type: 'search', placeholder: 'Ask in your own words, e.g. how do I track deadhead miles?', autocomplete: 'off'})
  var panel = el('div', {className: 'nlq-panel', role: 'dialog', 'ariaLabel': 'Ask the manual'}, [
    el('div', {className: 'nlq-head'}, [input, el('button', {className: 'nlq-close', textContent: '×', title: 'Close'})]),
    status,
    results
  ])
  var backdrop = el('div', {className: 'nlq-backdrop'}, [panel])
  window.document.body.append(backdrop)
  input.focus()

  function close () {
    backdrop.remove()
    window.document.removeEventListener('keydown', onKey)
  }
  function onKey (e) {
    if (e.key == 'Escape')
      close()
  }
  window.document.addEventListener('keydown', onKey)
  backdrop.addEventListener('click', e => {
    if ((e.target == backdrop) || e.target.classList.contains('nlq-close'))
      close()
  })

  var seq = 0
  async function run () {
    var query = input.value.trim()
    var mine = ++seq
    results.replaceChildren()
    if (query.length < 3)
      return status.textContent = ''
    try {
      await load(msg => {
        if (mine == seq)
          status.textContent = msg
      })
      if (mine != seq)
        return
      status.textContent = 'Searching…'
      var hit = await search(query)
      if (mine != seq)
        return
      status.textContent = hit.length? '': 'Nothing matched. Try describing the task instead of naming a screen.'
      results.replaceChildren(...hit.map(d => el('a', {className: 'nlq-hit', href: root + d.chunk.url.replace(/\.md$/, '/') + (d.chunk.anchor || '')}, [
        el('div', {className: 'nlq-hit-title', textContent: d.chunk.title}),
        el('div', {className: 'nlq-hit-crumb', textContent: d.chunk.section + (d.chunk.heading? ' › ' + d.chunk.heading: '')}),
        el('div', {className: 'nlq-hit-text', textContent: d.chunk.snippet}),
        el('div', {className: 'nlq-hit-score', textContent: Math.round(d.score * 100) + '%'})
      ])))
    }
    catch (err) {
      if (mine == seq)
        status.textContent = 'Search is unavailable: ' + err.message
    }
  }

  var timer
  input.addEventListener('input', () => {
    clearTimeout(timer)
    timer = setTimeout(run, 250)
  })
  input.addEventListener('keydown', e => {
    if (e.key == 'Enter') {
      clearTimeout(timer)
      run()
    }
  })
}

function attach () {
  if (window.document.querySelector('.nlq-open'))
    return
  var button = el('button', {className: 'nlq-open md-header__button', title: 'Ask the manual a question', innerHTML: '<span>Ask</span>'})
  button.addEventListener('click', open)
  window.document.querySelector('.md-header__inner')?.append(button)
}

window.document.addEventListener('DOMContentLoaded', attach)
// navigation.instant swaps the page body without a reload.
if (window.document$)
  window.document$.subscribe(attach)
