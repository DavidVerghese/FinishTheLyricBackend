const Lyric = require('../models/lyric')
const db = require('../db/connection')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const getLyrics = async (req, res) => {
    try {
        const lyrics = await Lyric.find()
        res.json(lyrics)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const getLyric = async (req, res) => {
    try {
        const { id } = req.params
        const lyric = await Lyric.findById(id)
        if (lyric) {
            return res.json(lyric)
        }
        res.status(404).json({ message: 'Lyric not found!' })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const createLyric = async (req, res) => {
    try {
        const lyric = await new Lyric(req.body)
        await lyric.save()
        res.status(201).json(lyric)
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message })
    }
}

const updateLyric = async (req, res) => {
    const { id } = req.params
    await Lyric.findByIdAndUpdate(id, req.body, { new: true }, (error, lyric) => {
        if (error) {
            return res.status(500).json({ error: error.message })
        }
        if (!lyric) {
            return res.status(404).json({ message: 'Lyric not found!' })
        }
        res.status(200).json(lyric)
    })
}

const deleteLyric = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Lyric.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Lyric deleted")
        }
        throw new Error("Lyric not found")
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = {
    createLyric,
    getLyrics,
    getLyric,
    updateLyric,
    deleteLyric
}
