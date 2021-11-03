import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory, useParams,  } from "react-router";
import {Link} from 'react-router-dom';
import Button from "../../components/Buttons";
import Chip from "../../components/Chips";
import { Col, Container, GridRow, Page, Row, Section } from "../../components/Containers";
import Image from '../../components/ImageDisplays'
import Modal from '../../components/Modals'
import {ReviewItem, StepItem} from './components'
import ReviewInputModal from "../../components/Modals/ReviewInput";

export default function RecipePage(props) {
  const [recipe, setRecipe] = useState({})
  const [reviews, setReviews] = useState([])
  const [loggedUser, setLoggedUser] = useState()
  const [modal, setModal] = useState('')
  const params = useParams()
  const history = useHistory()
  
  // On load fetch recipe data
  useEffect(() => {
    async function fetchRecipeData() {
      const res = await axios.get(`/api/recipes/${params.recipeId}`)
      console.log('recipeInfo',res.data);
      setRecipe(res.data)
    }
    
    async function fetchReviews() {
      const res = await axios.get(`/api/reviews/${params.recipeId}`)
      console.log('reviews',res.data);
      setReviews(res.data)
    }
    fetchReviews()
    fetchRecipeData()
  }, [params.recipeId])

  // Accept props for userInfo when logged in
  useEffect(() => {
    setLoggedUser(props.userData)
  }, [props.userData])

  // Fetch and set logged user info if available
  useEffect(() => {
    async function fetchLoggedUserInfo() {
      const res = await axios.get('/api/session');
      console.log(res);

      setLoggedUser(res.data)
    }
    fetchLoggedUserInfo()
  }, [])

  function toggleReviewModal() {
    if (!loggedUser) {
      setModal('reqLogin')
    } else {
      setModal('postReview')
    }
  }

  // Components
  const AddToPlannerButton = () => {
    async function handleAddToPlanner() {
      if(!loggedUser) {
        return setModal('reqLogin')
      } 

      const res = await axios.post(`/api/mealPlan/${params.recipeId}`)

      if (typeof res.data === "object") {
        history.push(`/profile/${loggedUser._id}?display=planner`)
      }

    }

    return (
      <Button.Primary onClick={() => handleAddToPlanner()}>
        Add to Planner
      </Button.Primary>
  )}

  const EditButton = () => (
    <Button.Ghost color={'black'}>
      Edit
    </Button.Ghost>
  )

  return(
    <>
    <Page>

      <Section>
        <Container>
          <GridRow>
            <Image.Recipe src={recipe?.picture} />
            <Col>
              <h1>{recipe?.name}</h1>
              {/* Add review result here */}
              <GridRow>
                <Chip.EstTime time={recipe?.time} />
              </GridRow>
              <p>{recipe?.description}</p>
              <GridRow>
                <AddToPlannerButton />
                {loggedUser && recipe.user === loggedUser?._id && (
                  <EditButton />
                )}
              </GridRow>

            </Col>
          </GridRow>
        </Container>
      </Section>

      <Section>
        <Container style={{width: '60%'}}>
          <h2 style={{alignSelf: 'flex-start'}}>Ingredients</h2>
          {recipe?.ingredients?.map((ingredient) => (
            <p style={{textAlign: 'center', margin: 0, marginBottom: 12}}>
              <b style={{color: '#FFB800'}}>{ingredient?.amount} {ingredient?.unit}</b> {ingredient?.name}
            </p>
          ))}

        </Container>
      </Section>

      <Section>
        <Container style={{width: '60%'}}>
          <h2 style={{alignSelf: 'flex-start'}}>Steps</h2>
          {recipe?.steps?.map((step, index) => (
            <StepItem 
              index={index}
              step={step}
            />
          ))}

        </Container>
      </Section>

      <Section>
        <Container style={{width: '60%'}}>
          <Row vCenter style={{justifyContent: 'space-between'}}>
            <h2 style={{alignSelf: 'flex-start'}}>Reviews</h2>
            <Button.Ghost color={"black"} onClick={() => toggleReviewModal()}>Post a review</Button.Ghost>
          </Row>
          {reviews.map((review, index, arr) => (
            <ReviewItem
              review={review}
              user={review.user}
              last={index === arr.length - 1}
            />
          ))}

        </Container>
      </Section>


    </Page>
    {modal && (
      <>
      {modal === 'reqLogin' && (
        <Modal>
          <h3 style={{margin: 0, marginBottom: 6}}>Login Required</h3>
          <p style={{margin: 0, marginBottom: 18, fontSize: '.8rem'}}>Don't have an account yet? Create one <Link to="/signup">here</Link></p>
          <GridRow flexed>
            <Button.Ghost 
              color="black" 
              onClick={() => setModal('')}
              rounded
            >
              Back
            </Button.Ghost>
            <Button.Primary 
              color="#FFCB14" 
              onClick={() => history.push('/login')}
              rounded
            >
              Log In
            </Button.Primary>
          </GridRow>
        </Modal>
      )}

      {modal === 'postReview' && (
        <ReviewInputModal
          recipeId={params.recipeId}
          closeModal={() => setModal('')}
          onSuccesfulPost={(newReview) => {
            setReviews([...reviews, newReview]);
            setModal('')
          }}
        />
      )}
      </>
    )}
    </>
  )
}