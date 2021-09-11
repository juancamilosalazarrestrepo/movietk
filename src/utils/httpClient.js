const API = "https://api.themoviedb.org/3";

export function get(path) {
   return fetch(API + path, {
        headers: {
            Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNmNmNTZiNTk4Nzc0OWUyNmE0ZTM5MTlkODIyMmE2NyIsInN1YiI6IjYwZjUwMDA5NjJmY2QzMDA1Y2U5ZGFmYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zPaWVFkTOinj1GOVnDd9UsVUrZo8boQkeB7TyK2Ezfs",
            "Content-Type": "application/json;charset=utf-8",
        },
    })
    .then((result) => result.json())

}  