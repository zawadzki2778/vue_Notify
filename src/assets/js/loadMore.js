export default function loadMore(res) {
  const messages = []

  // if res > 3 
  if (res.length > 3) {
    for (let i = 0; i < 3; i++) {
      //меняем main - false to main - true      
      res[i].main = true
      messages.push(res[i])
    }
    return messages
    // if res < 2
  } else {
    for (let i = 0; i < res.length; i++) {
      res[i].main = true
      messages.push(res[i])
    }
    return messages
  }
}
