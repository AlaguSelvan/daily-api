import { object, string, date, number, boolean } from 'koa-context-validator';

const publicationId = string();
const postId = string();

const httpLink = string().uri({ scheme: ['http', 'https'] });

const source = object().keys({
  publicationId: publicationId.required(),
  url: httpLink.required(),
});

const post = object().keys({
  id: postId.required(),
  title: string().required(),
  url: string().required(),
  publicationId: publicationId.required(),
  publishedAt: date().iso().allow(null),
  createdAt: date().iso().required(),
  image: httpLink,
  ratio: number().positive(),
  placeholder: string(),
  promoted: boolean().default(false),
});

export default {
  publicationId,
  source,
  postId,
  post,
};
