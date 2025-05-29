const API_BASE_URL = 'http://localhost:5000/api'; // تغيير هذا حسب عنوان الخادم

// دالة لإرسال نموذج الاتصال
async function submitContactForm(formData) {
    try {
        const response = await fetch(`${API_BASE_URL}/contact`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });
        return await response.json();
    } catch (error) {
        console.error('Error submitting contact form:', error);
        return { success: false, error: 'Network error' };
    }
}

// دالة لإرسال طلب الوظيفة
async function submitJobApplication(formData) {
    try {
        const response = await fetch(`${API_BASE_URL}/jobs/apply`, {
            method: 'POST',
            body: formData // FormData object for file upload
        });
        return await response.json();
    } catch (error) {
        console.error('Error submitting job application:', error);
        return { success: false, error: 'Network error' };
    }
}

// دالة لجلب المشاريع
async function fetchProjects() {
    try {
        const response = await fetch(`${API_BASE_URL}/projects`);
        return await response.json();
    } catch (error) {
        console.error('Error fetching projects:', error);
        return [];
    }
}

// يمكنك إضافة المزيد من الدوال حسب الحاجة

// تصدير الدوال للاستخدام في ملفات أخرى
export {
    submitContactForm,
    submitJobApplication,
    fetchProjects
};