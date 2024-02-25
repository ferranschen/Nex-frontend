

const BACK_END_URL = 'http://localhost:8000/'

export async function initLLM() {
  try {
    const response = await fetch(`${BACK_END_URL}llm_chat_init`).then(
      (response) => response.json()
    )
    console.log(response)
    return response
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error)
  }
  return null
}

export async function sendQuestionToLLM(user_question) {
  try {
    // Construct the URL with the user_question query parameter
    const url = new URL(`${BACK_END_URL}llm_chat`)
    url.searchParams.append('user_question', user_question)

    const response = await fetch(url) // Removed the Content-Type header for GET request
      .then((response) => response.json())

    console.log(response)
    return response
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error)
  }
  return null
}

