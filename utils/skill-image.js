import paris from "./paris.jpg"
import goblish from "./goblish.jpg"
import jug from "./jug.jpg"
import andy from "./andye.jpg"
import jugames from "./ganese.jpg"
import jhonny from "./jhonny.jpg"


export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case 'paris demers':
      return paris;
    case 'andy lian':
      return andy;
    case 'jug comics':
      return jug;
    case 'goblish':
      return goblish;
    case 'jug games':
      return jugames
    case 'the connect':
    return jhonny
  }
}
