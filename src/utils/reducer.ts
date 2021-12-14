export const initialState = { isOpen: false, language: "EN", user: "Amr" };

type ACTIONTYPE = { type: "toggle" } | { type: "changeUser"; user: string };

export function reducer (state: typeof initialState, action: ACTIONTYPE){
  switch (action.type) {
    case "toggle":
      return { ...state, isOpen: !state.isOpen };
    case "changeUser":
      return { ...state, user: action.user };
    default:
      return state;
  }
}
