let uId;
export const getId = (id) => {
    return uId = id
}
const Users = (state = [], action) => {
    switch (action.type) {
        case 'ADD_USER':
            return [
                ...state,
                {
                    id: action.id, name: action.name, lastname: action.lastname, about: action.about, listAPI: [

                        { id: 1, name: 'Fixer IO', desc: 'Add fixer.io functionality to your sites and apps', img: 'fas fa-dollar-sign', database: [], url: 'http://data.fixer.io/api/latest?access_key=4842e41f94caa5fc2c949b4bfe86e347' },
                        { id: 2, name: 'The Movie Database', desc: 'Add YouTube functionality to your sites and apps', img: 'fas fa-tv', database: [], url: 'https://api.themoviedb.org/3/movie/popular?api_key=38b0b64e1c4ca9ee5b886b99a6aa31c8&language=ru-RU' }
                    ]
                }
            ]
        case 'API_LOAD':
            return state.map(s => {
                //console.log(uId);

                if (uId == s.id) {
                    return {
                        id: s.id, name: s.name, lastname: s.lastname, about: s.about, listAPI: s.listAPI.map(api => {
                            if (api.id === action.id) {
                                return { id: api.id, name: api.name, desc: api.desc, database: action.payload, img: api.img, url: api.url }
                            }
                            return api;
                        })
                    }
                }
                return s
            })

        default:
            return state
    }
}
export default Users