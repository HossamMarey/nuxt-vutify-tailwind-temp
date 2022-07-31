import { $axios } from '~/utils/api';

// const getLocalLangauge = () => {
//   const lang = JSON.parse(localStorage.getItem('lang')) || 'en';
//   return lang === 'en' ? 'English' : 'Arabic';
// };

const getLAng = (params) => {
  if (params.lang) {
    return params.lang === 'en' ? 'English' : 'Arabic';
  } else {
    return 'English';
  }
};

export const getBlogs = (params) => {
  const lang = getLAng(params);
  if ($axios) {
    return $axios
      .post('/blogs', {
        lang,
      })
      .then((response) => response)
      .catch((error) => error.response.data);
  }
};

export const getBlog = (params) => {
  const lang = getLAng(params);
  if ($axios)
    return $axios
      .post(`/blogs/${params.id}`, {
        lang,
      })
      .then((response) => response)
      .catch((error) => error.response.data);
};
