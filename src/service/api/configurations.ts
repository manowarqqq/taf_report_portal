export const oauth = {
    requestBody: (userName: string, password: string) => {
        return {
            grant_type: 'password',
            username: userName,
            password: password,
        };
    },
};
