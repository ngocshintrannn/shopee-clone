[PREVIEW](https://ngocshintrannn.github.io/shopee-clone/)
<br>
[CLOUDFLARE PAGES](https://shopee-clone-678.pages.dev/)

function studentMsg(totalScores, studentScore) {
  if (hasPassingGrade(totalScores) === true) {
    return `Class average: ${getAverage(totalScores)}. Your grade: ${getGrade(studentScore)}. You passed the course.`
  }
  return `Class average: ${getAverage(totalScores)}. Your grade: ${getGrade(studentScore)}. You failed the course.`
}
studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 100)