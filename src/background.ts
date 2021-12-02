function notify() {
  chrome.notifications.create("69420", {
    type: "basic",
    iconUrl: "icon.png",
    title: "notification title",
    message: "notification message",
    priority: 2,
  });
}

const nInterval = setInterval(() => {
  notify();
}, 1000 * 10);
