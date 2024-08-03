//DOMContentLoaded ضمان تحميل كامل  محتوى الصفحة 
/*document.addEventListener('DOMContentLoaded', () => {
    const searchBox = document.querySelector('.searchBox');
    // إضافة "addEventListener"
    // لمربع البحث لمراقبة التغييرات
    searchBox.addEventListener('input', () => {
        const searchValue = searchBox.value.toLowerCase();
        const jobListings = document.querySelectorAll('.listingsPhotosnape, .listingsAccount');

        jobListings.forEach(listing => {
            const companyName = listing.querySelector('.companyName ').innerHTML.toLowerCase();
            //const jobTitle = listing.querySelector('.jobTitle1 ').textContent.toLowerCase();

           // listing.style.display = (companyName.includes(searchValue) || jobTitle.includes(searchValue)) ? '' : 'none';
           //يقوم بعمل mach مع اي حروف بالكلمة
           // listing.style.display = (companyName.includes(searchValue) ) ? '' : 'none';
            //مع اول الكلمة 
            debugger
            listing.style.display = companyName.startsWith(searchValue) ? '' : 'none';
        });
    });
});
*/
/*
document.addEventListener('DOMContentLoaded', () => {
    const companies = [
        { name: 'Photosnap',NEW:true,isNew:true, imgSrc: 'a.jpg', jobTitle: 'Senior Frontend Developer', details: '1d ago • Full Time • USA Only', tags: ['Frontend', 'Senior', 'HTML', 'CSS', 'JavaScript'], isFeatured: true },
        { name: 'Manage',NEW:true,isNew:true ,imgSrc: 'manage.jpg', jobTitle: 'FullStack Developer', details: '1d ago • Part Time • Remote', tags: ['FullStack', 'Midweight', 'Python', 'React'], isFeatured: true   },
        { name: 'Account',NEW:true, imgSrc: 'Screenshot 2024-07-19 104207.png', jobTitle: 'Junior Frontend Developer', details: '2d ago • Part Time • USA Only', tags: ['Frontend', 'Junior', 'JavaScript', 'React', 'Sass'], isFeatured: true },
        { name: 'MYHome', imgSrc: 'Screenshot 2024-07-19 104904.png', jobTitle: 'Junior Frontend Developer', details: '5d ago • Contract • USA Only', tags: ['Frontend', 'Junior', 'CSS', 'JavaScript'] },
        { name: 'Loop Studios', imgSrc: 'images (1).jpg', jobTitle: 'Software Engineer', details: '1w ago • Full Time • Worldwide', tags: ['Fullstack', 'Midweight', 'JavaScript', 'Ruby', 'Sass'], },
        { name: 'Facelt', imgSrc: 'images.png', jobTitle: 'Junior Backend Developer', details: '2w ago • Full Time • UK Only', tags: ['Backend', 'Junior', 'Ruby', 'RoR'],  },
        { name: 'Shortly', imgSrc: 'images (2).jpg', jobTitle: 'Junior Developer', details: '2w ago • Full Time • Worldwide', tags: ['Frontend', 'Junior', 'HTML', 'JavaScript', 'Sass'], },
        { name: 'Insure', imgSrc: 'images (3).jpg', jobTitle: 'Junior Frontend Developer', details: '2w ago • Full Time • USA Only', tags: ['Frontend', 'Junior', 'HTML', 'Vue', 'Sass'] },
        { name: 'Eyecam Co.', imgSrc: 'images (4).jpg', jobTitle: 'Full Stack Engineer', details: '3w ago • Full Time • Worldwide', tags: ['Fullstack', 'Midweight', 'JavaScript', 'Python', 'Django'],  },
        { name: 'The Air Filter Company', imgSrc: 'images (5).jpg', jobTitle: 'Front-end Dev', details: '1mo ago • Part Time • Worldwide', tags: ['Frontend', 'Junior', 'JavaScript', 'React', 'Sass'],  }
    ];

    const searchBox = document.getElementById('searchBox');
    const resultsContainer = document.querySelector('.results');
    //display
    const generateJobListingHTML = (company) => `
        <div class="listingsPhotosnape ${company.isNew?'clore':''}">
            <div class="photo">
                <img src="${company.imgSrc}" alt="${company.name} Logo" class="companyLogo">
            </div>
            <div class="firstList">
                <div class="companyName">
                    <span class="tags">
                        <span>${company.name}</span>
                        ${company.NEW ?'<span class="tag new">NEW!</span>' : ''}
                        
                        ${company.isFeatured ? '<span class="tag featured">FEATURED</span>' : ''}
                    </span>
                </div>
                <div class="jobTitle">
                    <h2>${company.jobTitle}</h2>
                </div>
                <div class="jobDetails">
                    <span>${company.details}</span>
                </div>
            </div>
            <div class="job-tags">
                ${company.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
        </div>
    `;

    // update :(
    const updateDisplay = () => {
        const searchValue = searchBox.value.toLowerCase();
        
        // match
        const matchedCompanies = companies.filter(company =>
            company.name.toLowerCase().includes(searchValue)
        );

        if (matchedCompanies.length > 0) {
            resultsContainer.innerHTML = matchedCompanies.map(generateJobListingHTML).join('');
        } else {
            resultsContainer.innerHTML = '<div class="no-results"><p>No results found</p></div>';
        }
    };

    searchBox.addEventListener('input', updateDisplay);


    
     //  submit 

    document.getElementById('addJobForm').addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const imgSrc = document.getElementById('imgSrc').value;
        const jobTitle = document.getElementById('jobTitle').value;
        const details = document.getElementById('details').value;
        const tags = document.getElementById('tags').value.split(',');

        const newCompany = {
            name: name,
            imgSrc: imgSrc,
            jobTitle: jobTitle,
            details: details,
            tags: tags,
            isNew: true,
            isFeatured: true,
            NEW:true
        };

        companies.unseft(newCompany);
        updateDisplay(''); 
    });
    updateDisplay('');
});
*/

$(document).ready(() => {
    debugger;
    const companies = [
        { name: 'Photosnap', NEW: true, isNew: true, imgSrc: 'a.jpg', jobTitle: 'Senior Frontend Developer', details: '1d ago • Full Time • USA Only', tags: ['Frontend', 'Senior', 'HTML', 'CSS', 'JavaScript'], isFeatured: true },
        { name: 'Manage', NEW: true, isNew: true, imgSrc: 'manage.jpg', jobTitle: 'FullStack Developer', details: '1d ago • Part Time • Remote', tags: ['FullStack', 'Midweight', 'Python', 'React'], isFeatured: true },
        { name: 'Account', NEW: true, imgSrc: 'Screenshot 2024-07-19 104207.png', jobTitle: 'Junior Frontend Developer', details: '2d ago • Part Time • USA Only', tags: ['Frontend', 'Junior', 'JavaScript', 'React', 'Sass'], isFeatured: true },
        { name: 'MYHome', imgSrc: 'Screenshot 2024-07-19 104904.png', jobTitle: 'Junior Frontend Developer', details: '5d ago • Contract • USA Only', tags: ['Frontend', 'Junior', 'CSS', 'JavaScript'] },
        { name: 'Loop Studios', imgSrc: 'images (1).jpg', jobTitle: 'Software Engineer', details: '1w ago • Full Time • Worldwide', tags: ['Fullstack', 'Midweight', 'JavaScript', 'Ruby', 'Sass'] },
        { name: 'Facelt', imgSrc: 'images.png', jobTitle: 'Junior Backend Developer', details: '2w ago • Full Time • UK Only', tags: ['Backend', 'Junior', 'Ruby', 'RoR'] },
        { name: 'Shortly', imgSrc: 'images (2).jpg', jobTitle: 'Junior Developer', details: '2w ago • Full Time • Worldwide', tags: ['Frontend', 'Junior', 'HTML', 'JavaScript', 'Sass'] },
        { name: 'Insure', imgSrc: 'images (3).jpg', jobTitle: 'Junior Frontend Developer', details: '2w ago • Full Time • USA Only', tags: ['Frontend', 'Junior', 'HTML', 'Vue', 'Sass'] },
        { name: 'Eyecam Co.', imgSrc: 'images (4).jpg', jobTitle: 'Full Stack Engineer', details: '3w ago • Full Time • Worldwide', tags: ['Fullstack', 'Midweight', 'JavaScript', 'Python', 'Django'] },
        { name: 'The Air Filter Company', imgSrc: 'images (5).jpg', jobTitle: 'Front-end Dev', details: '1mo ago • Part Time • Worldwide', tags: ['Frontend', 'Junior', 'JavaScript', 'React', 'Sass'] }
    ];

    const $searchBox = $('#searchBox');
    const $resultsContainer = $('.results');

    const generateJobListingHTML = (company) => `
        <div class="listingsPhotosnape ${company.isNew ? 'clore' : ''}">
            <div class="photo">
                <img src="${company.imgSrc}" alt="${company.name} Logo" class="companyLogo">
            </div>
            <div class="firstList">
                <div class="companyName">
                    <span class="tags">
                        <span>${company.name}</span>
                        ${company.NEW ? '<span class="tag new">NEW!</span>' : ''}
                        ${company.isFeatured ? '<span class="tag featured">FEATURED</span>' : ''}
                    </span>
                </div>
                <div class="jobTitle">
                    <h2>${company.jobTitle}</h2>
                </div>
                <div class="jobDetails">
                    <span>${company.details}</span>
                </div>
            </div>
            <div class="job-tags">
                ${company.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
        </div>
    `;

    const updateDisplay = () => {
        const searchValue = $searchBox.val().toLowerCase();

        const matchedCompanies = companies.filter(company =>
            company.name.toLowerCase().includes(searchValue)
        );

        if (matchedCompanies.length > 0) {
            $resultsContainer.html(matchedCompanies.map(generateJobListingHTML).join(''));
        } else {
            $resultsContainer.html('<div class="no-results"><p>No results found</p></div>');
        }
    };

    $searchBox.on('input', updateDisplay);

    $('#addJobForm').on('submit', (event) => {
        event.preventDefault();

        const name = $('#name').val();
        const imgSrc = $('#imgSrc').val();
        const jobTitle = $('#jobTitle').val();
        const details = $('#details').val();
        const tags = $('#tags').val().split(',');

        const newCompany = {
            name: name,
            imgSrc: imgSrc,
            jobTitle: jobTitle,
            details: details,
            tags: tags,
            isNew: true,
            isFeatured: true,
            NEW: true
        };

        companies.unshift(newCompany);
        updateDisplay();
    });

    // Initial display
    updateDisplay();
});





