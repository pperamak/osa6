import { useSelector, useDispatch } from "react-redux"
import { voteAnecdote } from "../reducers/anecdoteReducer"
import { showNotification } from "../reducers/notificationReducer"

const AnecdoteList=()=>{
    const dispatch= useDispatch()
    const anecdotes = useSelector(state => 
        state.anecdotes.filter(anecdote => 
          anecdote.content.toLowerCase().includes(state.filter.toLowerCase())
        )
      )
    const vote = (id) => {
        console.log('vote', id)
        
        const votedAnecdote=anecdotes.find(anecdote=>
          anecdote.id==id)
        dispatch(voteAnecdote(votedAnecdote))
        dispatch(showNotification(`you voted ${votedAnecdote.content}`, 5))
        
      }
      
    return (
        <div>
        <h2>Anecdotes</h2>
        {anecdotes.sort((a, b) => b.votes - a.votes).map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={() => vote(anecdote.id)}>vote</button>
            </div>
          </div>
        )} 
        </div>
    )
}

export default AnecdoteList