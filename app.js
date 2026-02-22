// Task 6: Promise එකක් සෑදීම
const condition = true;
const myPromise = new Promise((resolve, reject) => {
  if (condition) {
    resolve('Success!');
  } else {
    reject('Failure!');
  }
});

// Task 7: Async/Await භාවිතයෙන් එම Promise එක ක්‍රියාත්මක කිරීම
async function myFunction() {
  try {
    console.log("Waiting for promise...");
    const result = await myPromise; // Promise එක ඉවර වෙනකම් මෙතන නතර වී සිටී
    console.log(result); // සාර්ථක නම් 'Success!' පෙන්වයි
  } catch (error) {
    console.log(error); // අසාර්ථක නම් 'Failure!' පෙන්වයි
  }
}

// Function එක call කිරීම
myFunction();