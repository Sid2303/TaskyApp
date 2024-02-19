var state = {
    taskList: [
        {
            imageUrl: "",
            taskTitle: "",
            taskType: "",
            taskDesc: "",
        },
        {
            imageUrl: "",
            taskTitle: "",
            taskType: "",
            taskDesc: "",
        },
        {
            imageUrl: "",
            taskTitle: "",
            taskType: "",
            taskDesc: "",
        },
        {
            imageUrl: "",
            taskTitle: "",
            taskType: "",
            taskDesc: "",
        },
        {
            imageUrl: "",
            taskTitle: "",
            taskType: "",
            taskDesc: "",
        },
        {
            imageUrl: "",
            taskTitle: "",
            taskType: "",
            taskDesc: "",
        },
        {
            imageUrl: "",
            taskTitle: "",
            taskType: "",
            taskDesc: "",
        },
    ]
}

const state1= {
    taskList:[],
};

//DOM

const taskContents= document.querySelector(".task_content");
const taskModal= document.querySelector(".task_modal_body");

//template for card on screen
const htmlTaskContent = ({id, title, description, type, url})=>`
    <div class="col-md-4 col-lg-4 mt-3" id= ${id} key=${id}>
        <div class="card shadow task_card">
            <div class="card-header d-flex justify-content-end task_card_header">
                <button type="button" class="btn btn-outline-primary" name="${id}">
                    <i class="fa-solid fa-pencil" style="color: #74C0FC; mr-1.5" name=${id}></i>
                </button>
                <button type="button" class="btn btn-outline-danger" name="${id}">
                    <i class="fa-solid fa-trash" style="color: #74C0FC; name="${id}""></i>
                </button>
            </div>
            <div class="card-body">
                ${
                    url &&
                    `
                        <img width='100%' src=${url} alt="card image" class="card-img-top md-3 rounded-lg" />
                    `
                }
                <h4 class="card-title task_card_title">${title}</h4>
                <p class="description trim-3-lines text-muted">${description}</p>
                <div class="tags text-white d-flex flex-wrap">
                    <span> class="badge bg-primary m-1" ${type}</span>
                </div>
            </div>
            <div class="card-footer">
                <button type="button" class="btn btn-otuline-primary float-right data-bs-toggle="modal" data-bs-target="#showTask">Open Task</button>
            </div>
        </div>
    </div>
`
;

//Open modal body onclick

const htmlModalContent = ({id, title, description, type, url})=>{
    const date = new Date(parseInt(id));
    return `
    <div id=${id}>
        ${
            url &&
            `
                <img width='100%' src=${url} alt="card image" class="img-fluid place_holder_imange" />
            `
        }
        <stong class="text-mutes text-sm"> Created on: ${date.toDateString()}</stong>
        <h2 class="my-3">${title}</h2>
        <p class="text-muted">${description}</p>
    </div>
    `
}


const updateLocalStorage = ()=>{
    localStorage.setItem(
        JSON.stringify({
            tasks: state.taskList,
        })
    )
}