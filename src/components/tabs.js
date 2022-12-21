import axios from 'axios'

const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //

  const tabsTopics = document.createElement('div');
  const tabsOne = document.createElement('div');
  const tabsTwo = document.createElement('div');
  const tabsThree = document.createElement('div');

  tabsTopics.classList.add('topics');
  tabsOne.classList.add('tab');
  tabsTwo.classList.add('tab');
  tabsThree.classList.add('tab');

  tabsTopics.appendChild(tabsOne);
  tabsTopics.appendChild(tabsTwo);
  tabsTopics.appendChild(tabsThree);

  tabsOne.textContent = topics[0];
  tabsTwo.textContent = topics[1];
  tabsThree.textContent = topics[2];

  return tabsTopics;
}

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5001/api/topics` (test it with a console.log!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
  let tabber = document.querySelector(selector);
  axios.get(`http://localhost:5001/api/topics`)
    .then(resp => {
      let tabsData = resp.data;

      const tab = Tabs(tabsData.topics);
      tabber.appendChild(tab);
    })
    .catch(err => {
      console.log("Shoots! Nothing Brah.", err);
  });
  
  return tabber;

}

export { Tabs, tabsAppender }
