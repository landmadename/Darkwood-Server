import superagent from "superagent";
import {dataURLToBlob} from "./imgTools";
import { toast } from 'react-toastify';

let prefix = ""
if (process.env.NODE_ENV === "development"){
    console.log(process.env.NODE_ENV)
    prefix = "/api"
}

function handleRedirect(res, callback) {
    if (res.text.startsWith("<!doctype html>")){
        window.location.pathname = "/"
    }else {
        callback(res)
    }
}

function withToast(request, words) {
    return toast.promise(
        request,
        {
            pending: words + '中',
            success: words + '成功 👌',
            error:   words + '失败 🤯'
        }
    )
}

function handleError(error){
    switch (error.message) {
        case "Unauthorized":
            toast.error("登录失败")
            return
        default:
            toast.error("出现错误啦")
            return
    }
}

export function login(username, password, success) {
    withToast(
        superagent
            .post(prefix + '/login')
            .query({username: username, password: password}),
        "登录"
    )
        .then(success)
        .catch(console.log)
}

export function updateBrowser(that, page, type){
    superagent
        .get(prefix + '/browser')
        .query({type: type, page: page})
        .redirects(0)
        .then((res)=>{
            handleRedirect(res, (res)=>that.setState(res.body))
        })
        .catch(handleError)
}

export function updateSearch(that, page, type, wd) {
    superagent
        .get(prefix + '/search')
        .query({wd: wd, type: type, page: page})
        .then((res)=>{
            handleRedirect(res, (res)=>that.setState(res.body))
        })
        .catch(handleError)
}

export async function getUserInfo () {
    let data;
    await withToast(
        superagent
            .get(prefix + '/get_user_info'),
        "获取用户信息"
    )
        .then((res)=>{
            handleRedirect(res, (res) => data = res.body)
        })
        .catch(handleError)
    return data
}

export function deleteA (type, id, success) {
    withToast(
        superagent
            .get(prefix + '/delete_a_'+type)
            .query({id: id}),
        "删除"
    )
        .then((res)=>{
            handleRedirect(res, success)
        })
        .catch(console.log)
}

export function deleteOne(type, id, success) {
    switch (type) {
        case "/框条":
            deleteA("frame", id, success)
            break
        case "/卡纸":
            deleteA("card", id, success)
            break
        case "/内框":
            deleteA("inner_frame", id, success)
            break
        case "/场景":
            deleteA("scene", id, success)
            break
        default:
            break
    }
}

export async function getA (type, id) {
    let data;
    await withToast(
        superagent
            .get(prefix + '/get_a_'+type)
            .query({id: id}),
        "获取信息"
    )
        .then((res)=>{
            handleRedirect(res, (res) => data = res.body)
        })
        .catch(handleError)
    return data
}

export async function loadPicture(picName){
    let pic;
    if (picName === ""){
        return null
    }
    await superagent
        .get(prefix + '/images/'+picName)
        .responseType('blob')
        .then((res)=>{
            handleRedirect(res, (res) => {
                pic = res.body
                pic["preview"] = URL.createObjectURL(pic)
                pic["name"] = picName
                pic["init"] = true
            })
        })
        .catch(handleError)
    return pic
}

export async function loadPictures(imagesString){
    let images = []
    if (imagesString != null && imagesString !== ""){
        for (const picName of imagesString.split(',')) {
            if(picName !== ""){
                images.push(await loadPicture(picName))
            }
        }
    }
    return images
}

export function warpPerspective(that, points, chosenImg, success) {
    withToast(
        superagent
            .post(prefix + '/warp_perspective')
            .send({points: points, chosenImg: chosenImg}),
        "分割图片"
    )
        .then((res)=>{
            handleRedirect(res, success)
        })
        .catch(console.log)
}

export function createFrame(name, contentImages, historyImages, reduce, success) {
    let {width, content, bottom, right, croppedImg} = reduce
    let formData = new FormData()
    formData.append("name",     name)
    formData.append("content",  content)
    formData.append("width",    width)
    formData.append("bottom",   dataURLToBlob(bottom))
    formData.append("right",    dataURLToBlob(right))
    formData.append("prev",     dataURLToBlob(croppedImg.prev))
    contentImages.forEach((file)=>{
        formData.append("contentImages",    file)
    })
    historyImages.forEach((file)=>{
        formData.append("historyImages",    file)
    })

    withToast(
        superagent
            .post(prefix + '/create_frame')
            .send(formData),
        "新建框条"
    )
        .then((res)=>{
            handleRedirect(res, success)
        })
        .catch(console.log)
}

export function updateFrame(id, name, contentImages, historyImages, reduce, success) {
    let {width, content} = reduce
    let formData = new FormData()
    formData.append("id",       id)
    formData.append("name",     name)
    formData.append("content",  content)
    formData.append("width",    width)
    contentImages.forEach((file)=>{
        formData.append("contentImages",    file)
    })
    historyImages.forEach((file)=>{
        formData.append("historyImages",    file)
    })
    withToast(
        superagent
            .post(prefix + '/update_frame')
            .send(formData),
        "更新框条"
    )
        .then((res)=>{
            handleRedirect(res, success)
        })
        .catch(handleError)
}

export function createCard(name, prevImg, img, success) {
    let formData = new FormData()
    formData.append("name",     name)
    formData.append("prevImg",  prevImg)
    formData.append("img",      img)
    withToast(
        superagent
            .post(prefix + '/create_card')
            .send(formData),
        "新建卡纸"
    )
        .then((res)=>{
            handleRedirect(res, success)
        })
        .catch(handleError)
}

export function updateCard(id, name, prevImg, img, success) {
    let formData = new FormData()
    formData.append("id",       id)
    formData.append("name",     name)
    formData.append("prevImg",  prevImg)
    formData.append("img",      img)
    withToast(
        superagent
            .post(prefix + '/update_card')
            .send(formData),
        "更新卡纸"
    )
        .then((res)=>{
            handleRedirect(res, success)
        })
        .catch(handleError)
}

export function createScene(name, prevImg, img, success) {
    let formData = new FormData()
    formData.append("name",     name)
    formData.append("prevImg",  prevImg)
    formData.append("img",      img)
    withToast(
        superagent
            .post(prefix + '/create_scene')
            .send(formData),
        "新建场景"
    )
        .then((res)=>{
            handleRedirect(res, success)
        })
        .catch(handleError)
}

export function updateScene(id, name, prevImg, img, success) {
    let formData = new FormData()
    formData.append("id",       id)
    formData.append("name",     name)
    formData.append("prevImg",  prevImg)
    formData.append("img",      img)
    withToast(
        superagent
            .post(prefix + '/update_scene')
            .send(formData),
        "更新场景"
    )
        .then((res)=>{
            handleRedirect(res, success)
        })
        .catch(handleError)
}

export function createInnerFrame(name, prevImg, color, success) {
    let formData = new FormData()
    formData.append("name",     name)
    formData.append("prevImg",  prevImg)
    formData.append("color",    color)
    withToast(
        superagent
            .post(prefix + '/create_inner_frame')
            .send(formData),
        "创建内框"
    )
        .then((res)=>{
            handleRedirect(res, success)
        })
        .catch(handleError)
}

export function updateInnerFrame(id, name, prevImg, color, success) {
    let formData = new FormData()
    formData.append("id",       id)
    formData.append("name",     name)
    formData.append("prevImg",  prevImg)
    formData.append("color",    color)
    withToast(
        superagent
            .post(prefix + '/update_inner_frame')
            .send(formData),
        "更新内框"
    )
        .then((res)=>{
            handleRedirect(res, success)
        })
        .catch(handleError)
}

export function updateUserInfo(shopName, shopAddress, phoneNumber, openingHours, intro, cover, banner, workImages) {
    let formData = new FormData()
    formData.append("shopName",       shopName)
    formData.append("shopAddress",     shopAddress)
    formData.append("phoneNumber",  phoneNumber)
    formData.append("openingHours",    openingHours)
    formData.append("intro",    intro)
    formData.append("cover",    cover)
    formData.append("banner",    banner)
    workImages.forEach((file)=>{
        formData.append("workImages",    file)
    })
    withToast(
        superagent
            .post(prefix + '/update_user_info')
            .send(formData),
        "更新用户信息"
    )
        .catch(handleError)
}
