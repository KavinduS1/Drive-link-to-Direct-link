feather.replace();

function convertLink() {
    const driveLink = document.getElementById('driveLink').value;
    const resultDiv = document.getElementById('result');
    
    const fileId = driveLink.match(/\/d\/([^\/]+)/)?.[1];
    
    if (fileId) {
        const directLink = `https://drive.google.com/uc?export=download&id=${fileId}`;
        document.getElementById('directLink').value = directLink;
        resultDiv.classList.add('active');
    } else {
        showError('Please enter a valid Google Drive link');
        resultDiv.classList.remove('active');
    }
}

function copyLink() {
    const directLink = document.getElementById('directLink');
    directLink.select();
    document.execCommand('copy');
    showMessage('Link copied to clipboard!');
}

function showMessage(text) {
    const toast = document.createElement('div');
    toast.textContent = text;
    toast.style.position = 'fixed';
    toast.style.bottom = '20px';
    toast.style.left = '50%';
    toast.style.transform = 'translateX(-50%)';
    toast.style.background = '#10B981';
    toast.style.color = 'white';
    toast.style.padding = '12px 24px';
    toast.style.borderRadius = '8px';
    toast.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    toast.style.zIndex = '1000';
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 2000);
}

function showError(text) {
    const error = document.createElement('div');
    error.textContent = text;
    error.style.position = 'fixed';
    error.style.bottom = '20px';
    error.style.left = '50%';
    error.style.transform = 'translateX(-50%)';
    error.style.background = '#EF4444';
    error.style.color = 'white';
    error.style.padding = '12px 24px';
    error.style.borderRadius = '8px';
    error.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    error.style.zIndex = '1000';
    document.body.appendChild(error);

    setTimeout(() => {
        error.remove();
    }, 2000);
}