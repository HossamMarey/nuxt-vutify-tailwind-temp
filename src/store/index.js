/* eslint-disable @typescript-eslint/no-unused-vars */

// import { getCategories } from '~/services/api/categoryService';
export const getters = {
  isAuthenticated(state) {
    return state.auth.loggedIn;
  },

  loggedInUser(state) {
    return state.auth.user;
  },
};

export const actions = {
  async nuxtServerInit({ commit }, ctx) {
    // handle login via token
    // const TOKEN = ctx.$auth.strategies.laravelJWT.token.get() || null;
    // if (TOKEN) {
    //   this.$axios.defaults.headers.common.Authorization = TOKEN;
    //   const userRes = await ctx.$axios.get('/auth/current_user');
    //   if (userRes && userRes.data) {
    //     ctx.$auth.setUser(userRes.data);
    //     // if user add =>
    //     // Cart
    //     const cartPromise = initCart(ctx, commit);
    //     // Wishlist
    //     const wishListPromise = initWishList(ctx, commit);
    //     await Promise.all([cartPromise, wishListPromise]);
    //   }
    // }
    // // console.log('protected', userRes.data);

    // // init state e courses
    // const coursesPromise = initCourses(ctx, commit);
    // // init state e placementTests
    // const testsPromise = initTests(ctx, commit);
    // // init state e categories
    // const catgsPromise = initCategories(ctx, commit);
    // // init state e blogs
    // const blogsPromise = initBlogs(ctx, commit);

    // await Promise.all([
    //   coursesPromise,
    //   testsPromise,
    //   catgsPromise,
    //   blogsPromise,
    // ]);
  },
};

// const initCourses = async (ctx, commit) => {
//   try {
//     commit('courses/FETCH_INITIATE');
//     const coursesRes = await getCourses(ctx.route.query);
//     if (coursesRes && coursesRes.status === 200) {
//       commit('courses/FETCH_SUCCESS', coursesRes.data);
//     } else {
//       commit('courses/FETCH_ERROR', coursesRes);
//     }
//   } catch (error) { }
//   return 'done';
// };

