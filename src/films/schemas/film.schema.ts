import mongoose, { Types } from 'mongoose';
import { Film } from '../interfaces/film.interface';

export const FilmSchema = new mongoose.Schema<Film>(
  {
    title: {
      type: String,
      required: true,
    },
    episode_id: {
      type: Number,
      required: true,
    },
    opening_crawl: {
      type: String,
      required: true,
    },
    director: {
      type: String,
      required: true,
    },
    producer: {
      type: String,
      required: true,
    },
    release_date: {
      type: String,
      required: true,
    },
    characters: {
      type: [String],
      default: [],
    },
    planets: {
      type: [String],
      default: [],
    },
    starships: {
      type: [String],
      default: [],
    },
    vehicles: {
      type: [String],
      default: [],
    },
    species: {
      type: [String],
      default: [],
    },
    comments: {
      type: Number,
      default: 0,
    },
    created: {
      type: String,
      required: true,
    },
    edited: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);
