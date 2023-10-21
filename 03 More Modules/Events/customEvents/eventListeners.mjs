import { UserEvents } from './userEvents.mjs'

// Create an instance of UserEvents class
const userEvent = new UserEvents()


// create listeners / functions
function saveToDatabase() {
  console.log('Saving post to database')
}

function sendNotifications() {
  console.log('Sending Notifications')
}

function updateTimeline() {
  console.log('Updating timeline')
}

// add listener to postCreated event
userEvent.addListener('postCreated', saveToDatabase)
userEvent.addListener('postCreated', sendNotifications)
userEvent.addListener('postCreated', updateTimeline)


// call create post
userEvent.createPost('This is my first post')
