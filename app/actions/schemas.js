import { Schema, arrayOf } from 'normalizr'

const artistSchema = new Schema('artists', {
    idAttribute: 'id'
})

const albumSchema = new Schema('albums', {
    idAttribute: 'id'
})

albumSchema.define({
    artists: arrayOf(artistSchema)
})

const trackSchema = new Schema('tracks', {
    idAttribute: 'id'
})

trackSchema.define({
    album: albumSchema,
    artists: arrayOf(artistSchema)
})

const Schemas = {
    ARTIST: artistSchema,
    ARTIST_ARRAY: arrayOf(artistSchema),
    ALBUM: albumSchema,
    ALBUM_ARRAY: arrayOf(albumSchema),
    TRACK: trackSchema,
    TRACK_ARRAY: arrayOf(trackSchema)
}

export default Schemas
