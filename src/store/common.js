import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const state = () => ({
  isAuth: false,
  cards: [
    {
      id: 0,
      cardImage: ["apartment1.png", "apartment2.png"],
      title: { ar: "شقة تم تجديدها", en: "Renovated Apartment" },
      location: "New Cairo, Egypt",
      specs: [
        { icon: "bed", info: { value: "4", key: "beds" } },
        { icon: "bath", info: { value: "2", key: "baths" } },
        { icon: "squareft", info: { value: "100", key: "sqft" } },
      ],
      price: "25000",
      buttonTitle: "viewDetails",
      isPremium: true,
      isFav: true,
      priceOffer: 50,
      category: "3 Stars",
      type: "Villa",
      floor: "First Floor",
      view: "Pool",
      finishing: "Electerical",
      paymentMethod: "Cash",
      unitService: "Residential",
    },
    {
      id: 1,
      cardImage: ["villa1.png", "apartment2.png"],
      title: { ar: "شقة تم تجديدها", en: "Renovated Apartment" },
      location: "New Cairo, Egypt",
      specs: [
        { icon: "bed", info: { value: "4", key: "beds" } },
        { icon: "bath", info: { value: "2", key: "baths" } },
        { icon: "squareft", info: { value: "170", key: "sqft" } },
      ],
      price: "15000",
      category: "1 Star",
      type: "Appartment",
      floor: "Ground Floor",
      view: "Sea",
      finishing: "Decorations",
      paymentMethod: "Master Card",
      unitService: "Residential",
      buttonTitle: "viewDetails",
      isPremium: true,
      priceOffer: 20,
      isFav: true,
    },
    {
      id: 2,
      cardImage: ["villa1.png", "apartment2.png"],
      title: { ar: "شقة تم تجديدها", en: "Renovated Apartment" },
      location: "New Cairo, Egypt",
      specs: [
        { icon: "bed", info: { value: "4", key: "beds" } },
        { icon: "bath", info: { value: "2", key: "baths" } },
        { icon: "squareft", info: { value: "117", key: "sqft" } },
      ],
      price: "10000",
      category: "1 Star",
      type: "Appartment",
      floor: "Ground Floor",
      view: "Sea",
      finishing: "Decorations",
      paymentMethod: "Credit Card",
      unitService: "Residential",
      buttonTitle: "viewDetails",
      isPremium: true,
      isFav: true,
      priceOffer: 10,
    },
    {
      id: 3,
      cardImage: ["villa2.png", "apartment2.png"],
      title: { ar: "شقة تم تجديدها", en: "Renovated Apartment" },
      location: "New Cairo, Egypt",
      specs: [
        { icon: "bed", info: { value: "4", key: "beds" } },
        { icon: "bath", info: { value: "2", key: "baths" } },
        { icon: "squareft", info: { value: "90", key: "sqft" } },
      ],
      price: "20000",
      category: "1 Star",
      type: "Appartment",
      floor: "Ground Floor",
      view: "Sea",
      finishing: "Decorations",
      paymentMethod: "Credit Card",
      unitService: "Administrative",
      buttonTitle: "viewDetails",
      isPremium: true,
      priceOffer: 20,
      isFav: true,
    },
    {
      id: 4,
      cardImage: ["villa2.png", "apartment2.png"],
      title: { ar: "شقة تم تجديدها", en: "Renovated Apartment" },
      location: "New Cairo, Egypt",
      specs: [
        { icon: "bed", info: { value: "4", key: "beds" } },
        { icon: "bath", info: { value: "2", key: "baths" } },
        { icon: "squareft", info: { value: "150", key: "sqft" } },
      ],
      price: "17000",
      category: "1 Star",
      type: "Appartment",
      floor: "Ground Floor",
      view: "Sea",
      finishing: "Decorations",
      paymentMethod: "Credit Card",
      unitService: "Residential",
      buttonTitle: "viewDetails",
      isPremium: true,
      priceOffer: 10,
      isFav: true,
    },
    {
      id: 5,
      cardImage: ["villa2.png", "apartment2.png"],
      title: { ar: "شقة تم تجديدها", en: "Renovated Apartment" },
      location: "New Cairo, Egypt",
      specs: [
        { icon: "bed", info: { value: "4", key: "beds" } },
        { icon: "bath", info: { value: "2", key: "baths" } },
        { icon: "squareft", info: { value: "120", key: "sqft" } },
      ],
      price: "15000",
      category: "1 Star",
      type: "Appartment",
      floor: "Ground Floor",
      view: "Sea",
      finishing: "Decorations",
      paymentMethod: "Credit Card",
      unitService: "Residential",
      buttonTitle: "viewDetails",
      isPremium: true,
      priceOffer: 70,
      isFav: false,
    },
    {
      id: 6,
      cardImage: ["villa2.png", "apartment2.png"],
      title: { ar: "شقة تم تجديدها", en: "Renovated Apartment" },
      location: "New Cairo, Egypt",
      specs: [
        { icon: "bed", info: { value: "4", key: "beds" } },
        { icon: "bath", info: { value: "2", key: "baths" } },
        { icon: "squareft", info: { value: "250", key: "sqft" } },
      ],
      price: "18000",
      category: "1 Star",
      type: "Appartment",
      floor: "Ground Floor",
      view: "Sea",
      finishing: "Decorations",
      paymentMethod: "Credit Card",
      unitService: "Commercial",
      buttonTitle: "viewDetails",
      isPremium: true,
      priceOffer: 30,
      isFav: false,
    },
    {
      id: 7,
      cardImage: ["villa2.png", "apartment2.png"],
      title: { ar: "شقة تم تجديدها", en: "Renovated Apartment" },
      location: "New Cairo, Egypt",
      specs: [
        { icon: "bed", info: { value: "4", key: "beds" } },
        { icon: "bath", info: { value: "2", key: "baths" } },
        { icon: "squareft", info: { value: "60", key: "sqft" } },
      ],
      price: "15500",
      category: "1 Star",
      type: "Appartment",
      floor: "Ground Floor",
      view: "Sea",
      finishing: "Decorations",
      paymentMethod: "Credit Card",
      unitService: "Residential",
      buttonTitle: "viewDetails",
      isPremium: true,
      isFav: true,
    },
    {
      id: 8,
      cardImage: ["villa2.png", "apartment2.png"],
      title: { ar: "شقة تم تجديدها", en: "Renovated Apartment" },
      location: "New Cairo, Egypt",
      specs: [
        { icon: "bed", info: { value: "4", key: "beds" } },
        { icon: "bath", info: { value: "2", key: "baths" } },
        { icon: "squareft", info: { value: "100", key: "sqft" } },
      ],
      price: "15000",
      category: "1 Star",
      type: "Appartment",
      floor: "Ground Floor",
      view: "Sea",
      finishing: "Decorations",
      paymentMethod: "Credit Card",
      unitService: "Commercial",
      buttonTitle: "viewDetails",
      isPremium: true,
      isFav: true,
    },
  ],
  wishlists: [
    {
      id: 1,
      title: "Cairo",
      cards: [0, 1, 2],
    },
    {
      id: 2,
      title: "Alex",
      cards: [3, 4],
    },
    {
      id: 3,
      title: "Giza",
      cards: [7, 8],
    },
  ],
  selectedWishlist: 0,
  user: {
    id: 0,
    username: "Ahmed Mohamed",
    firstName: "Ahmed",
    nickName: "@Ahmed.M",
    lastName: "Mohamed",
    mobile: "01225685997",
    email: "ahmed@gmail.com",
    password: "•••••••••••",
    language: "English",
    city: "Cairo",
    gender: "Male",
    dateOfBirth: new Date(1995, 7, 17).toISOString().slice(0, 10),
    MaritalStatue: "Married",
    numberOfChilds: "5",
    img: "",
    workExprience: [
      { CompanyName: "Real Estate Company", title: "Senior Consultant" },
      { CompanyName: "Real Estate Company", title: "Senior Realtor" },
      { CompanyName: "Real Estate Startup", title: "Buyer Agent" },
    ],
    Expertise: {
      expertiseArea: "From 300,000 to 300,500 LE",
      Categories: ["Commercial", "Adminstartive"],
      expertIn: ["Emaar", "TMG"],
    },
  },
  savedSearch: [
    {
      searchTitle: null,
    },
  ],
  appliedSearch: {},
})

export const getters = {
  isLoggedIn(state) {
    return state.isAuth;
  },
  user(state) {
    return state.user;
  },
  cards(state) {
    return state.cards;
  },
  wishlists(state) {
    return state.wishlists;
  },
  selectedWishlist(state) {
    return state.selectedWishlist;
  },
  savedSearch(state) {
    return state.savedSearch;
  },
  appliedSearch(state) {
    return state.appliedSearch;
  },
}
export const mutations = {
  logout(state) {
    state.isAuth = false;
  },
  logIn(state) {
    state.isAuth = true;
  },
  updateWishList(state, event) {
    const cardIndex = state.cards.findIndex((card) => card.id === event.id);
    state.cards[cardIndex].isFav = event.isFav;

    if (event.isFav) {
      const wishlistIndex = state.wishlists.findIndex(
        (item) => item.id === event.wishlistId
      );
      state.wishlists[wishlistIndex].cards.push(event.id);
    } else {
      const wishlistIndex = state.wishlists.findIndex((item) =>
        item.cards.includes(event.id)
      );
      const cardIndex = state.wishlists[wishlistIndex].cards.findIndex(
        (item) => item === event.id
      );
      state.wishlists[wishlistIndex].cards.splice(cardIndex, 1);
    }
  },

  filterWishList(state, selected) {
    state.selectedWishlist = selected;
  },
  insertWishList(state, value) {
    state.wishlists.push({
      title: value,
      id: state.wishlists.length + 1,
      cards: [],
    });
  },
  UpdateUserInfo(state, payload) {
    state.user = payload;
  },
  insertWorkExp(state, payload) {
    state.user.workExprience.push({
      CompanyName: payload.company,
      title: payload.title,
    });
  },
  updateExprties(state, payload) {
    Object.assign(state.user.Expertise, payload);
  },
  updateUserInfo(state, payload) {
    Object.assign(state.user, payload);
  },
  saveSearchParams(state, payload) {
    const existIndex = state.savedSearch.findIndex(
      (item) => item.searchTitle === payload.searchTitle
    );
    if (existIndex !== -1) {
      state.savedSearch[existIndex] = payload;
    } else {
      state.savedSearch.push(payload);
    }
  },
  deleteSavedSearch(state, value) {
    state.savedSearch = state.savedSearch.filter((item) => item !== value);
  },

  appliedSearchParams(state, payload) {
    Object.assign(state.appliedSearch, payload);
  },
} 