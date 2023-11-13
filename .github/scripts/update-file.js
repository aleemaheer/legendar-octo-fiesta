const fs = require('fs');
const { execSync } = require('child_process');

const filePath = 'testt';

try {
    // Check if the file exists
    if (!fs.existsSync(filePath)) {
        // If the file doesn't exist, create it and write something into it
        fs.writeFileSync(filePath, 'Initial content for the file.');
        console.log('File created successfully.');
    } else {
        // If the file exists, append something to it
        fs.appendFileSync(filePath, '\nAppended content.');
        console.log('File updated successfully.');
    }

    // Commit and push changes using the provided GitHub token
    execSync('git config --global user.email "actions@github.com"');
    execSync('git config --global user.name "GitHub Actions"');
    execSync('git add .');
    execSync('git commit -m "Update file: $(date +\'%Y-%m-%d %H:%M:%S\')"');
    execSync('git push origin HEAD');

    console.log('Changes committed and pushed to the repository.');
} catch (error) {
    console.error('Error updating file:', error);
    process.exit(1);
}
update - file.js