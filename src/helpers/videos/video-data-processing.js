/**
 * Transform netflix video data structure to something that we can properly use
 *
 * @param {object} data - Incoming netflix data
 */
const getVideosArray = (data, searchTerm) => {
  const suggestionsReference =
    data.search.byTerm[searchTerm].suggestions['1'][2]
  const titlesReference = data.search.byTerm[searchTerm].titles['1'][2]

  const videos = []
  for (const key in data.search.byReference[suggestionsReference]) {
    const video = data.search.byReference[suggestionsReference][key]
    videos.push({
      id: video.summary.id,
      name: video.summary.name,
      type: 'suggestion',
    })
  }

  for (const key in data.search.byReference[titlesReference]) {
    const video = data.search.byReference[titlesReference][key]
    videos.push({
      id: video.summary.id,
      name: video.summary.name,
      type: 'title',
    })
  }

  return videos
}

export { getVideosArray }
