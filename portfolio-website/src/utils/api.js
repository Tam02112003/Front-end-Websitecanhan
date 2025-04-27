// src/api/api.js

const API_URL = 'https://localhost:7218/api/Projects/'; // Địa chỉ API của bạn

export const fetchProjects = async () => {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching projects:', error);
        throw error; // Ném lại lỗi để xử lý ở nơi gọi
    }
};

export const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString('default', { month: 'numeric', year: 'numeric' });
};