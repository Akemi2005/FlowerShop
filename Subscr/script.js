document.addEventListener('DOMContentLoaded', function () {
  fetch('https://raw.githubusercontent.com/Akemi2005/FlowerShop/main/plans.json')
  .then(response => response.json())
  .then(plans => {
    const planCardsContainer = document.getElementById('planCardsContainer');

    plans.forEach(plan => {
      const planCard = document.createElement('div');
      planCard.classList.add('plan-card');

      const contentPlan = document.createElement('div');
      contentPlan.classList.add('content-plan');

      const imageBouq = document.createElement('div');
      imageBouq.classList.add('image-bouq');

      if (plan.image) {
        imageBouq.style.backgroundImage = `url(${plan.image})`;
      }

      const planTerms = document.createElement('div');
      planTerms.classList.add('plan-terms');

      const planTitle = document.createElement('p');
      planTitle.textContent = plan.type;

      const planList = document.createElement('ul');
      for (const key in plan) {
        if (key !== 'type' && key !== 'image') {
          const listItem = document.createElement('li');
          listItem.textContent = `${plan[key]}`;
          planList.appendChild(listItem);
        }
      }

      planTerms.appendChild(planTitle);
      planTerms.appendChild(planList);

      contentPlan.appendChild(imageBouq);
      contentPlan.appendChild(planTerms);

      const selectButton = document.createElement('button');
      selectButton.classList.add('btn-sel');
      selectButton.textContent = 'Select';

      planCard.appendChild(contentPlan);
      planCard.appendChild(selectButton);

      planCardsContainer.appendChild(planCard);
    });
  })
  .catch(error => console.error('Error loading JSON:', error));
    
  const iconOpen = document.getElementById('iconOpen')
  const iconOpenShop = document.getElementById('iconOpenShop')
  const iconClose = document.getElementById('iconClose')
  const menuIcons = document.getElementById('menuIcons')
  const meinMenu = document.getElementById('meinMenu')
    
  menuIcons.addEventListener('click', ()=> {
      iconOpenShop.classList.toggle('hide')
      iconOpen.classList.toggle('hide')
      iconClose.classList.toggle('hide')
      meinMenu.classList.toggle('hide')
  })
    
    const menu = document.getElementById("window");
    const offset = menu.offsetTop;
    let lastScrollTop = 0; 
    function fixMenu() {
    const currentScrollTop = window.pageYOffset;
    if (currentScrollTop >= offset) {
    menu.classList.add("fixed-menu");
    document.body.style.paddingTop = menu.offsetHeight + "px";
    } else {
    menu.classList.remove("fixed-menu");
    document.body.style.paddingTop = 0;
    menu.style.backgroundColor = "";
    }

    if (currentScrollTop < lastScrollTop) {
    menu.classList.remove("fixed-menu");
    document.body.style.paddingTop = 0;
    menu.style.backgroundColor = ""; 
    }
    lastScrollTop = currentScrollTop; 
    }
    window.addEventListener("scroll", fixMenu);
    
    document.addEventListener("DOMContentLoaded", () => {
    const menuHeight = menu.offsetHeight; 
    });

    const decrementButton = document.getElementById('decrement');
    const incrementButton = document.getElementById('increment');
    const countSpan = document.getElementById('count');

    let count = 1;

    decrementButton.addEventListener('click', function () {
        if (count > 1) {
            count--;
            updateCount();
        }
    });

    incrementButton.addEventListener('click', function () {
        count++;
        updateCount();
    });

    function updateCount() {
        countSpan.textContent = count;
    }

    var dropdownItems = document.querySelectorAll('.dropdown-faq');

    dropdownItems.forEach(function(dropdownItem) {
        var arrowIcon = dropdownItem.querySelector('.fa-arrow-right');
        var replayElement = dropdownItem.querySelector('.replay');
        var labelQuestion = dropdownItem.querySelector('.label-question h6');

        dropdownItem.addEventListener('click', function() {
            if (replayElement.style.display === 'none' || replayElement.style.display === '') {
                replayElement.style.display = 'flex';
                labelQuestion.style.fontWeight = 'bold';
                arrowIcon.style.transform = 'rotate(-45deg)';
            } else {
                replayElement.style.display = 'none';
                labelQuestion.style.fontWeight = 'normal';
                arrowIcon.style.transform = 'rotate(45deg)';
            }
        });
    });
});
