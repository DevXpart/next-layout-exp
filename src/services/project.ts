export const getProject = async (projectId: any) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${projectId}`)
        .then(response => response.json())
}
