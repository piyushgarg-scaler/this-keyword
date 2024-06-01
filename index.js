
const magic = {
    title: 'Magic',
    icon: '🪄'
}


const remote = {
    name: 'AC Remote 123',
    color: 'white',
    display: function () {

        const arrFn = () => {
            console.log('Inside 1', this);
        }

        arrFn()

    }
}



/**
 * Can you [somehow] () => {
        console.log('Inside 1', this);
    } make this code this point to current obj?

    or always global or window

    Y/N :=> 
 */

// this in arrow functions?
// :=> this is inherit from the parent's context

remote.display.apply(magic)

// var color = 'Hooo 👻'

// remote.display()

// const refWithoutCtx = remote.display
// refWithoutCtx()

// const ref = remote.display.bind(remote);
// ref()





// const remote_2 = {
//     name: 'AC Remote 2',
//     color: 'Black',
//     display: function () {
//         console.log('Inside 2', this.color);
//     },
//     specialFunction: function (username, password) {
//         console.log(`Special for`, this.name, this.color, username, password)
//     }
// }


// .bind
// const ref = remote_2.specialFunction.bind(remote)
// ref('bind', 'abc')
// ref('bind 2 22', 'abc 22')

// .apply - calls the fn right there
// remote_2.specialFunction.apply(remote, ['uname', '$uperman'])

// .call
// remote_2.specialFunction.call(remote_2, 'uname', 'pssword')


