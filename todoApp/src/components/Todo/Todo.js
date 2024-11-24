import React, {useState} from 'react';
import classes from "./Todo.module.scss";

const Todo = ({todo, removeHandler,isEdit, setCurrentID, editHandler}) => {
    const [input, setInput] = useState(todo.title);
    return (
        <div className={classes.todoComp}>
                <div className={classes.todo}>
                    <p className={classes.title}>{todo.title}</p>
                    <div className={classes.btns}>
                        <button className={classes.btn} onClick={()=>setCurrentID(todo.id)}>
                            <svg className={classes.icon} width="24" height="24" viewBox="0 0 24 24" fill="currentColor"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M5.18808 18.4261C5.24165 18.4261 5.29522 18.4208 5.34879 18.4127L9.85415 17.6226C9.90772 17.6119 9.95862 17.5877 9.99612 17.5476L21.3506 6.1931C21.3754 6.16832 21.3951 6.13889 21.4086 6.10648C21.422 6.07408 21.4289 6.03934 21.4289 6.00426C21.4289 5.96918 21.422 5.93444 21.4086 5.90204C21.3951 5.86964 21.3754 5.8402 21.3506 5.81542L16.8988 1.36096C16.8479 1.31007 16.7809 1.28328 16.7086 1.28328C16.6363 1.28328 16.5693 1.31007 16.5184 1.36096L5.16397 12.7154C5.12379 12.7556 5.09969 12.8038 5.08897 12.8574L4.29879 17.3627C4.27274 17.5062 4.28205 17.6539 4.32592 17.793C4.36979 17.9321 4.4469 18.0584 4.55058 18.161C4.72736 18.3324 4.94969 18.4261 5.18808 18.4261ZM6.99344 13.7547L16.7086 4.04221L18.672 6.0056L8.95683 15.7181L6.57558 16.1386L6.99344 13.7547ZM21.8568 20.6761H2.14254C1.66844 20.6761 1.2854 21.0592 1.2854 21.5333V22.4976C1.2854 22.6154 1.38183 22.7119 1.49969 22.7119H22.4997C22.6175 22.7119 22.714 22.6154 22.714 22.4976V21.5333C22.714 21.0592 22.3309 20.6761 21.8568 20.6761Z"
                                    fill="white"/>
                            </svg>
                        </button>
                        <button className={classes.btn} onClick={()=>removeHandler(todo.id)}>
                            <svg className={classes.icon} width="22" height="22" viewBox="0 0 22 22" fill="currentColor"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M6.92815 2.21185H6.71387C6.83173 2.21185 6.92815 2.11542 6.92815 1.99757V2.21185H15.071V1.99757C15.071 2.11542 15.1674 2.21185 15.2853 2.21185H15.071V4.14042H16.9996V1.99757C16.9996 1.05203 16.2308 0.283279 15.2853 0.283279H6.71387C5.76833 0.283279 4.99958 1.05203 4.99958 1.99757V4.14042H6.92815V2.21185ZM20.4282 4.14042H1.57101C1.0969 4.14042 0.713867 4.52346 0.713867 4.99757V5.85471C0.713867 5.97257 0.810296 6.06899 0.928153 6.06899H2.54601L3.20762 20.0779C3.25047 20.9913 4.00583 21.7119 4.91922 21.7119H17.0799C17.996 21.7119 18.7487 20.994 18.7915 20.0779L19.4532 6.06899H21.071C21.1889 6.06899 21.2853 5.97257 21.2853 5.85471V4.99757C21.2853 4.52346 20.9023 4.14042 20.4282 4.14042ZM16.8737 19.7833H5.12548L4.47726 6.06899H17.5219L16.8737 19.7833Z"
                                    fill="white"/>
                            </svg>
                        </button>
                        {isEdit && <div className={classes.edit}>
                            <input type='text' onChange={(e) => setInput(e.target.value)} value={input} className={classes.title}/>
                            <div className={classes.btns}>
                                <button className={classes.cancel} onClick={() => {
                                    setCurrentID(null)
                                }}>Cancel
                                </button>
                                <button className={classes.save} onClick={() => editHandler({
                                    ...todo,
                                    title: input,
                                })}>Save
                                </button>
                            </div>


                        </div>}
                    </div>
                </div>
        </div>
    );
};

export default Todo;