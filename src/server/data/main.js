const distanceInWordsToNow = require('date-fns/distance_in_words_to_now')
const jobs = require('./resume.json')
const repos = require('./github')
const talks = require('./talks')

module.exports = {
  name: 'Sara Vieira',
  company: 'YLD',
  age: distanceInWordsToNow(new Date(1991, 12, 29)),
  twitter: 'https://twitter.com/NikkitaFTW',
  github: 'https://github.com/SaraVieira/',
  jobs,
  repos,
  talks
}