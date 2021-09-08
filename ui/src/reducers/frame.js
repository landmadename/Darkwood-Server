const initialState = {
    currentPad: "ChoosePad",
    chosenImg: "",
    croppedImg: {},
    name: "",
    bottom: "",
    right: "",
    width: "2",
    content: "",
    contentImages: [],
    historyImages: [],
    markPoints: [
        [-10000, -10000],
        [-10000, -10000],
        [-10000, -10000],
        [-10000, -10000],
        [-10000, -10000],
        [-10000, -10000]
    ]
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, { type, payload }) => {
    switch (type) {
        case 'clearMarkPoints':
            return Object.assign({}, state,
                {markPoints: [
                        [-10000, -10000],
                        [-10000, -10000],
                        [-10000, -10000],
                        [-10000, -10000],
                        [-10000, -10000],
                        [-10000, -10000]
                    ]}
            )

        case 'setMarkPoints':
            return Object.assign({}, state, payload)

        case 'resetFrame':
            return Object.assign({}, state, initialState)

        case 'pushImage':
            let data = {}
            data[payload.type] = state[payload.type].concat([payload.image])
            return Object.assign({}, state, data)

        case 'clearHistoryImages':
            return Object.assign({}, state, payload)

        case 'clearContentImages':
            return Object.assign({}, state, payload)

        case 'setContent':
            return Object.assign({}, state, payload)

        case 'setWidth':
            return Object.assign({}, state, payload)

        case 'setFrame':
            return Object.assign({}, state, payload)

        case 'setName':
            return Object.assign({}, state, payload)

        case 'setChosenImg':
            return Object.assign({}, state, payload)

        case 'setCroppedImg':
            return Object.assign({}, state, payload)

        default:
            return state
    }
}