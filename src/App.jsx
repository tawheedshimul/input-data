import './App.css'

function App() {


  return (
    <>
      <div className='container mx-auto'>
        {/* 1st box  */}
        <div className='bg-black'>
          <h1 className='text-yellow-200 ms-2'>JOB REQUEST FORM</h1>
        </div>
        <div className='mt-4 grid grid-cols-3 gap-2 content-start'>
          <div>
            <div className='flex'>
              <p>Quotation Approved?</p>
              <input className='px-2 border border-black flex-grow' type="text"></input>
            </div>

          </div>
          <div>
            <div className='flex'>
              <p>Job No:</p>
              <input className='px-2 border border-black flex-grow' type="text"></input>
            </div>
          </div>
          <div>
            <div className='flex'>
              <p>Lead:</p>
              <input className='px-2 border border-black flex-grow' type="text"></input>
            </div>
          </div>
        </div>

        {/* 2nd div  */}

        <div className='mt-6 grid grid-cols-3 gap-2 content-start'>
          <div className='flex'>
            <p className='text-red-500'>Date Submitted:</p>
            <input className='px-2 border border-black flex-grow' type="text"></input>
          </div>
          <div className='flex'>
            <p className='text-red-500'>Draft Due Date: </p>
            <input className='px-2 border border-black flex-grow' type="text"></input>
          </div>
          <div className='flex w-9/12'>
            <p className='text-red-500'>Final Due Date:</p>
            <input className='px-2 border border-black flex-grow' type="text"></input>
          </div>
          <div className='flex'>
            <p className='text-black'>Client:</p>
            <input className='px-2 border border-black flex-grow' type="text"></input>
          </div>
          <div className='flex'>
            <p className='text-black'>Contact: </p>
            <input className='px-2 border border-black flex-grow' type="text"></input>
          </div>
          <div className='flex w-9/12'>
            <p className='text-black'>Tel:</p>
            <input className='px-2 border border-black flex-grow' type="text"></input>
          </div>
        </div>
        {/* 3rd div  */}
        <div className='mt-2 grid grid-cols-3 gap-2 content-start'>
          <div className='flex'>
            <p className='text-black'>Project Title:</p>
            <input className='px-2 border border-black flex-grow' type="text"></input>
          </div>
          <div>Content Provided:</div>
        </div>
        {/* 1st box end  */}

        {/* 2nd box start  */}
        <div className='bg-black mt-6'>
          <h1 className='text-red-600 ms-2 font-semibold'>DESIGN SPECIFICATIONS</h1>
        </div>

        {/* cheackmark box start  */}

        <div className='grid grid-cols-3 w-9/12 gap-4'>
          <label className="custom-checkbox flex justify-between">
            <p className="checkmark">Print Artwork Supplies</p>
            <input type="checkbox"></input>
          </label>
          <label className="custom-checkbox flex justify-between">
            <p className="checkmark">Create ArtWork</p>
            <input type="checkbox"></input>
          </label>
          <label className="custom-checkbox flex justify-between">
            <p className="checkmark">Prof read</p>
            <input type="checkbox"></input>
          </label>
          <label className="custom-checkbox flex justify-between">
            <p className="checkmark">Artwork supplied-Editing required</p>
            <input type="checkbox"></input>
          </label>
          <label className="custom-checkbox flex justify-between">
            <p className="checkmark">Photo Retouching</p>
            <input type="checkbox"></input>
          </label>
        </div>
        {/* 2nd box end  */}
        {/* 3rd box start  */}
        <div className='bg-black mt-6 grid grid-cols-2'>
          <h1 className='text-red-600 ms-2 font-semibold'>JOB TYPE AND DESCRIPTION</h1>
          <h1 className='text-red-600 ms-2 font-semibold'>PROJECT DESCRIPTION</h1>
        </div>
        {/* 3RD BOX SECTION MARK  */}
        <div className='grid grid-cols-2'>
          <div className='grid grid-cols-3'>
            <div className="custom-checkbox flex justify-between mr-10">
              <p className="checkmark">Digital ad</p>
              <input type="checkbox"></input>
            </div>
            <div className="custom-checkbox flex justify-between mr-10">
              <p className="checkmark">Print ad</p>
              <input type="checkbox"></input>
            </div>
            <div className="custom-checkbox flex justify-between mr-10">
              <p className="checkmark">Brochure</p>
              <input type="checkbox"></input>
            </div>
            <div className="custom-checkbox flex justify-between mr-10">
              <p className="checkmark">Booklet</p>
              <input type="checkbox"></input>
            </div>
            <div className="custom-checkbox flex justify-between mr-10">
              <p className="checkmark">Poster/Flyer</p>
              <input type="checkbox"></input>
            </div>
            <div className="custom-checkbox flex justify-between mr-10">
              <p className="checkmark">Postcard</p>
              <input type="checkbox"></input>
            </div>
            <div className="custom-checkbox flex justify-between mr-10">
              <p className="checkmark">Invitation</p>
              <input type="checkbox"></input>
            </div>
            <div className="custom-checkbox flex justify-between mr-10">
              <p className="checkmark">Newsletter</p>
              <input type="checkbox"></input>
            </div>
            <div className="custom-checkbox flex justify-between mr-10">
              <p className="checkmark">Forms/Cards</p>
              <input type="checkbox"></input>
            </div>
            <div className="custom-checkbox flex justify-between mr-10">
              <p className="checkmark">Banner</p>
              <input type="checkbox"></input>
            </div>
            <div className="custom-checkbox flex justify-between mr-10">
              <p className="checkmark">Brochure</p>
              <input type="checkbox"></input>
            </div>
            <div className="custom-checkbox flex justify-between mr-10">
              <p className="checkmark">Poster</p>
              <input type="checkbox"></input>
            </div>
            <div className="custom-checkbox flex justify-between mr-10">
              <p className="checkmark">Flyer</p>
              <input type="checkbox"></input>
            </div>
            <div className="custom-checkbox flex justify-between mr-10">
              <p className="checkmark">Logo</p>
              <input type="checkbox"></input>
            </div>
            <div className="custom-checkbox flex justify-between mr-10">
              <p className="checkmark">Signages</p>
              <input type="checkbox"></input>
            </div>
          </div>
          <div>
            <div class="m-4 border-l border-gray-500">
              <p className='ms-2 text-gray-400'>Write a brief description, including dates, text,
                content, theme, etc. Please include budget numbers
                and attach any approval for projects</p>
            </div>
          </div>
        </div>
        {/* 3RD BOX MARK SECTION END  */}
        {/* 3rd box end  */}

        {/* 5th box start  */}
        <div className='bg-black mt-6'>
          <h1 className='text-red-600 ms-2 font-semibold'>PROOFS</h1>
        </div>
        <p>Proofs will be sent to client for approval. Please check the artwork and respond in timely manner so as not to delay completion</p>
        {/* 5 th box end  */}

        {/* 6th box start  */}
        <div className='bg-black mt-6'>
          <h1 className='text-red-600 ms-2 font-semibold'>APPROVED FOR PRINT</h1>
        </div>

        <div className='grid grid-cols-2 mt-2'>
          <div className='flex w-4/6 justify-between'>
            <p>Designer Signature </p>
            <input className='px-2 border border-black' type="text"></input>
          </div>
          <div className='flex w-4/6 justify-between'>
            <p>Quality Checked by</p>
            <input className='px-2 border border-black' type="text"></input>
          </div>
          <div className='flex w-4/6 justify-between mt-2'>
            <p>Date Sent</p>
            <input className='px-2 border border-black' type="text"></input>
          </div>
        </div>

        <div className='grid grid-cols-2 mt-4'>
          <div className='flex w-4/6 justify-between mt-2'>
            <p>Project completed</p>
            <input className='px-2 border border-black' type="text"></input>
          </div>
        </div>
        {/* 6th box end  */}

        {/* end section  */}
        <div className='mt-32 py-10 flex justify-between'>
          <p className='text-red-500'>
            Internal use only
            <br />
            Please refer the quotion for other details

          </p>
          <span className="bg-black text-red-500 py-2 px-6 rounded-full font-bold">Submit</span>
        </div>

      </div>
    </>
  )
}

export default App;
