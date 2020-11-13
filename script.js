import {remoteForm} from '@github/remote-form'

// Make all forms that have the `data-remote` attribute a remote form.
remoteForm('form[data-remote]', async function(form, wants, request) {
  // Before we start the request
  form.classList.remove('has-error')
  form.classList.add('is-loading')

  let response
  try {
    response = await wants.html()
  } catch (error) {
    // If the request errored, we'll set the error state and return.
    form.classList.remove('is-loading')
    form.classList.add('has-error')
    return
  }

  // If the request succeeded we can do something with the results.
  form.classList.remove('is-loading')
  form.querySelector('.results').innerHTML = response.html
})
