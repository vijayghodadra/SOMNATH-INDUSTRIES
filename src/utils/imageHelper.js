import peanutDefault from '../assets/Peanut.jpg';
import chanaDefault from '../assets/Chana.jpg';
import tuwarDefault from '../assets/Tuwar.jpg';
import wheatDefault from '../assets/Wheat.png';
import cardsDefault from '../assets/Cards.jpeg';
import machineMayorDefault from '../assets/Machinemayor.jpeg';

const DEFAULT_IMAGES = {
  home_hero_bg: 'https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?q=80&w=2000&auto=format&fit=crop',
  peanut: peanutDefault,
  chana: chanaDefault,
  tuwar: tuwarDefault,
  wheat: wheatDefault,
  cards_img: cardsDefault,
  machine_mayor: machineMayorDefault
};

export const getImageUrl = (key) => {
  try {
    const saved = localStorage.getItem(`somnath_img_${key}`);
    return saved || DEFAULT_IMAGES[key];
  } catch (e) {
    return DEFAULT_IMAGES[key];
  }
};

export const setImageUrl = (key, url) => {
  try {
    if (url && url.trim() !== '') {
      localStorage.setItem(`somnath_img_${key}`, url.trim());
    } else {
      localStorage.removeItem(`somnath_img_${key}`);
    }
  } catch (e) {
    console.error('Error setting image URL:', e);
  }
};

export const resetImages = () => {
  try {
    Object.keys(DEFAULT_IMAGES).forEach(key => {
      localStorage.removeItem(`somnath_img_${key}`);
    });
  } catch (e) {
    console.error('Error resetting images:', e);
  }
};
