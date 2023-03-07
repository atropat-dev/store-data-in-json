let $ = document

const form = $.getElementById("form")

// e.preventDefault() برای این استفاده میشه که رفتار پیشفرز سابمیت رو بگیره یعنی صفحه هربار با کلیک کردن رفرش نمیشه

form.addEventListener("submit", (e) => {
  e.preventDefault()

  // اینجا یه آبجکت به اسم فورم دیتا ساختم و داخل او فورم المنت ریختم
  // این روش برای اینه که به داده های فرم دسترسی داشته باشیم
  const formData = new FormData(form)
  const data = {}

  //یه لوپ از دیتای فورم داریم الان که دیتای فورم رو entries به ما میده
  //
  for (const [key, value] of formData.entries()) {
    data[key] = value
  }

  // اینجا هم لاگ دیتا رو گرفتم در آخر و چون شی هستش اونو با متود استرینگیفای
  // به استرینگ تبدیل کردم که تو کنسول میادش

  console.log(JSON.stringify(data))
})
