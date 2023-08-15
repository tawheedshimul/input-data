import './App.css'

function App() {


  return (
    <>
      <div className='container mx-auto'>
        {/* 1st box  */}
        <div className='bg-black'>
          <h1 className='text-yellow-200 ms-2'>JOB REQUEST FORM</h1>
        </div>
        <div className='mt-4 grid grid-cols-3 gap-1 content-start'>
          <div className='flex mt-1'>
            <p className='text-black mt-2 font-semibold mr-2'>Quotation Approved?</p>
            <input className='px-2 border border-black flex-grow h-7' type="text"></input>
          </div>
          <div className='flex mt-1'>
            <p className='text-black mt-2 font-semibold mr-2'>Job No.</p>
            <input className='px-2 border border-black flex-grow h-7' type="text"></input>
          </div>
          <div className='flex mt-1'>
            <p className='text-black mt-2 font-semibold mr-2'>Lead:</p>
            <input className='px-2 border border-black flex-grow h-7' type="text"></input>
          </div>
        </div>

        {/* 2nd div  */}

        <div className='mt-6 grid grid-cols-3 gap-1 content-start'>
          <div className='flex'>
            <p className='text-red-500 mr-2'>Date Submitted:</p>
            <input className='px-2 border border-black flex-grow' type="text"></input>
          </div>
          <div className='flex'>
            <p className='text-red-500 mr-2'>Draft Due Date: </p>
            <input className='px-2 border border-black flex-grow' type="text"></input>
          </div>
          <div className='flex w-9/12'>
            <p className='text-red-500 mr-2'>Final Due Date:</p>
            <input className='px-2 border border-black flex-grow' type="text"></input>
          </div>
          <div className='flex'>
            <p className='text-black mr-2'>Client:</p>
            <input className='px-2 border border-black flex-grow' type="text"></input>
          </div>
          <div className='flex'>
            <p className='text-black mr-2'>Contact: </p>
            <input className='px-2 border border-black flex-grow' type="text"></input>
          </div>
          <div className='flex w-9/12'>
            <p className='text-black mr-2'>Tel:</p>
            <input className='px-2 border border-black flex-grow' type="text"></input>
          </div>
        </div>
        {/* 3rd div  */}
        <div className='mt-2 grid grid-cols-3 gap-1 content-start'>
          <div>
            <div className='flex mt-1'>
              <p className='text-black mt-2 font-semibold mr-2'>Project Title:</p>
              <input className='px-2 border border-black flex-grow h-7' type="text"></input>
            </div>
            <div className='flex'>
              <p className='text-black mr-2'>Job Created by:</p>
              <input className='px-2 border border-black flex-grow' type="text"></input>
            </div>
          </div>
          <div>
            <div className='mt-3 font-semibold'>Content Provided:</div>
            <div className='flex justify-between'>
              <label class="customcheck">
                Text Content
                <input type="checkbox" className="checkinput"></input>
                <span className="check-mark"></span>
              </label>
              <label class="customcheck">
                Photos/graphics
                <input type="checkbox" className="checkinput"></input>
                <span className="check-mark"></span>
              </label>
            </div>
          </div>
          <div>
            <div className='mt-9'>
              <div className='flex'>
                <p className='text-black mr-2'>Other (specify):</p>
                <input className='px-2 border border-black flex-grow' type="text"></input>
              </div>
            </div>

          </div>
        </div>
        {/* 1st box end  */}

        {/* design specification start  */}
        <div className='bg-black mt-6'>
          <h1 className='text-red-600 ms-2 font-semibold'>DESIGN SPECIFICATIONS</h1>
        </div>

        {/* cheackmark box start  */}

        <div className='grid grid-cols-3 w-9/12 gap-2 mt-2'>
          <label className="customcheck w-72">
            Print Artwork supplied
            <input type="checkbox" className="checkinput"></input>
            <span className="check-mark"></span>
          </label>
          <label class="customcheck w-44">
            Create ArtWork
            <input type="checkbox" class="checkinput"></input>
            <span class="check-mark"></span>
          </label>
          <label class="customcheck w-28">
            Prof read
            <input type="checkbox" class="checkinput"></input>
            <span class="check-mark"></span>
          </label>
          <label class="customcheck w-72">
            Artwork supplied-Editing required
            <input type="checkbox" class="checkinput"></input>
            <span class="check-mark"></span>
          </label>
          <label class="customcheck w-44">
            Photo Retouching
            <input type="checkbox" class="checkinput"></input>
            <span class="check-mark"></span>
          </label>
        </div>
        {/* design specification end  */}
        {/* 3rd box job typw and description start  */}
        <div className='bg-black mt-6 grid grid-cols-2'>
          <h1 className='text-red-600 ms-2 font-semibold'>JOB TYPE AND DESCRIPTION</h1>
          <h1 className='text-red-600 ms-2 font-semibold'>PROJECT DESCRIPTION</h1>
        </div>
        {/* 3RD BOX SECTION MARK  */}
        <div className='grid grid-cols-2 mt-5'>
          <div className='flex'>
            <div className='grid grid-cols-3'>
              <label class="customcheck w-28">
                Digital ad
                <input type="checkbox" class="checkinput"></input>
                <span class="check-mark"></span>
              </label>
              <label class="customcheck w-28">
                Print ad
                <input type="checkbox" class="checkinput"></input>
                <span class="check-mark"></span>
              </label>

              <label className="customcheck w-28">
                Brochure
                <input type="checkbox" className="checkinput"></input>
                <span className="check-mark"></span>
              </label>

              <label className="customcheck w-28">
                Booklet
                <input type="checkbox" className="checkinput"></input>
                <span className="check-mark"></span>
              </label>

              <label class="customcheck w-28">
                Poster/Flyer
                <input type="checkbox" class="checkinput"></input>
                <span class="check-mark"></span>
              </label>

              <label className="customcheck w-28">
                Postcard
                <input type="checkbox" className="checkinput"></input>
                <span className="check-mark"></span>
              </label>

              <label className="customcheck w-28">
                Invitation
                <input type="checkbox" className="checkinput"></input>
                <span className="check-mark"></span>
              </label>

              <label className="customcheck w-28">
                Newsletter
                <input type="checkbox" className="checkinput"></input>
                <span className="check-mark"></span>
              </label>

              <label className="customcheck w-28">
                Forms/Cards
                <input type="checkbox" className="checkinput"></input>
                <span className="check-mark"></span>
              </label>

              <label className="customcheck w-28">
                Banner
                <input type="checkbox" className="checkinput"></input>
                <span className="check-mark"></span>
              </label>

              <label className="customcheck w-28">
                Brochure
                <input type="checkbox" className="checkinput"></input>
                <span className="check-mark"></span>
              </label>

              <label className="customcheck w-28">
                Poster
                <input type="checkbox" className="checkinput"></input>
                <span className="check-mark"></span>
              </label>

              <label className="customcheck w-28">
                Flyer
                <input type="checkbox" className="checkinput"></input>
                <span className="check-mark"></span>
              </label>

              <label className="customcheck w-28">
                Logo
                <input type="checkbox" className="checkinput"></input>
                <span className="check-mark"></span>
              </label>

              <label className="customcheck w-28">
                Signages
                <input type="checkbox" className="checkinput"></input>
                <span className="check-mark"></span>
              </label>

              <label className="customcheck w-28">
                Website
                <input type="checkbox" className="checkinput"></input>
                <span className="check-mark"></span>
              </label>

              <div className='flex'>
                <p>Other specify</p>
                <input className='ms-1 border border-black w-24 h-4 mt-1' type="text"></input>
              </div>
            </div>
            <div class="m-4 border-l border-gray-500"></div>
          </div>
          <div>
            <p className='ms-2 text-gray-400'>
              Write a brief description, including dates, text,
              content, theme, etc. Please include budget numbers
              and attach any approval for projects

            </p>
          </div>
        </div>
        {/* 3RD BOX job description MARK SECTION END  */}
        {/* 4th box job sepcification start  */}
        <div className='bg-black mt-6'>
          <h1 className='text-red-600 ms-2 font-semibold'>JOB SPECIFICATION</h1>
        </div>

        <div className='flex'>
          <div className='flex flex-col w-28'>
            <h3 className='text-orange-500'>SIZE:</h3>
            <label className="custom-left-check">
              <input type="checkbox" className="checkleftinput"></input>
              <span className="check-leftmark"></span>
              A5
            </label>
            <label className="custom-left-check">
              <input type="checkbox" className="checkleftinput"></input>
              <span className="check-leftmark"></span>
              A4
            </label>
            <label className="custom-left-check">
              <input type="checkbox" className="checkleftinput"></input>
              <span className="check-leftmark"></span>
              A3
            </label>
            <label className="custom-left-check">
              <input type="checkbox" className="checkleftinput"></input>
              <span className="check-leftmark"></span>
              A2
            </label>
            <label className="custom-left-check">
              <input type="checkbox" className="checkleftinput"></input>
              <span className="check-leftmark"></span>
              A1
            </label>
            <label className="custom-left-check">
              <input type="checkbox" className="checkleftinput"></input>
              <span className="check-leftmark"></span>
              A0
            </label>
            <div>
              <input className='px-2 w-28 border border-black h-4' type="text"></input>
              <p>Other specify</p>
            </div>
          </div>
          {/* 2nd  */}
          <div className=' ms-2'>
            <h3 className='ms-8 text-orange-500'>QTY</h3>
            <div>
              <label className="custom-left-check">
                <input type="checkbox" className="checkleftinput"></input>
                <span className="check-leftmark"></span>
                One side
              </label>
            </div>
            <label className="custom-left-check">
              <input type="checkbox" className="checkleftinput"></input>
              <span className="check-leftmark"></span>
              Two sies
            </label>
            <div>
              <input className='px-2 border border-black h-4' type="text"></input>
              <p>Other specify</p>
            </div>
          </div>
          {/* 3rd  colour */}
          <div className='flex flex-col ms-8'>
            <h3 className='ms-8 text-orange-500'>Colour</h3>
            <label className="custom-left-check">
              <input type="checkbox" className="checkleftinput"></input>
              <span className="check-leftmark"></span>
              4 color
            </label>
            <label className="custom-left-check">
              <input type="checkbox" className="checkleftinput"></input>
              <span className="check-leftmark"></span>
              Black/White
            </label>
            <label className="custom-left-check">
              <input type="checkbox" className="checkleftinput"></input>
              <span className="check-leftmark"></span>
              Single color
            </label>
            <label className="custom-left-check">
              <input type="checkbox" className="checkleftinput"></input>
              <span className="check-leftmark"></span>
              Special color
            </label>
          </div>
          {/* 4 th matherial */}
          <div className=' ms-16 flex flex-col'>
            <h3 className='ms-8 text-orange-500'>Material</h3>
            <label className="custom-left-check">
              <input type="checkbox" className="checkleftinput"></input>
              <span className="check-leftmark"></span>
              Paper
            </label>
            <label className="custom-left-check">
              <input type="checkbox" className="checkleftinput"></input>
              <span className="check-leftmark"></span>
              Card Stock
            </label>
            <label className="custom-left-check">
              <input type="checkbox" className="checkleftinput"></input>
              <span className="check-leftmark"></span>
              Vinyl
            </label>
            <label className="custom-left-check">
              <input type="checkbox" className="checkleftinput"></input>
              <span className="check-leftmark"></span>
              Fabric
            </label>
            <label className="custom-left-check">
              <input type="checkbox" className="checkleftinput"></input>
              <span className="check-leftmark"></span>
              ACM
            </label>
            <label className="custom-left-check">
              <input type="checkbox" className="checkleftinput"></input>
              <span className="check-leftmark"></span>
              Aluminium
            </label>
            <label className="custom-left-check">
              <input type="checkbox" className="checkleftinput"></input>
              <span className="check-leftmark"></span>
              Acrylic
            </label>
          </div>
          {/* 5th finishing  */}
          <div className=' ms-16'>
            <h3 className='ms-8 text-orange-500'>Finishing</h3>
            <div className='flex'>
              <div className='flex flex-col'>
                <label className="custom-left-check">
                  <input type="checkbox" className="checkleftinput"></input>
                  <span className="check-leftmark"></span>
                  Fold
                </label>
                <label className="custom-left-check">
                  <input type="checkbox" className="checkleftinput"></input>
                  <span className="check-leftmark"></span>
                  Saddle Stitch
                </label>
                <label className="custom-left-check">
                  <input type="checkbox" className="checkleftinput"></input>
                  <span className="check-leftmark"></span>
                  Crease
                </label>
                <label className="custom-left-check">
                  <input type="checkbox" className="checkleftinput"></input>
                  <span className="check-leftmark"></span>
                  Perforate
                </label>
                <label className="custom-left-check">
                  <input type="checkbox" className="checkleftinput"></input>
                  <span className="check-leftmark"></span>
                  Bind
                </label>
                <label className="custom-left-check">
                  <input type="checkbox" className="checkleftinput"></input>
                  <span className="check-leftmark"></span>
                  Glue
                </label>
                <label className="custom-left-check">
                  <input type="checkbox" className="checkleftinput"></input>
                  <span className="check-leftmark"></span>
                  Mount
                </label>
              </div>
              <div className='ms-16 flex flex-col'>
                <label className="custom-left-check">
                  <input type="checkbox" className="checkleftinput"></input>
                  <span className="check-leftmark"></span>
                  Laminate
                </label>
                <label className="custom-left-check">
                  <input type="checkbox" className="checkleftinput"></input>
                  <span className="check-leftmark"></span>
                  Foil
                </label>
                <label className="custom-left-check">
                  <input type="checkbox" className="checkleftinput"></input>
                  <span className="check-leftmark"></span>
                  Cut
                </label>
              </div>
            </div>
          </div>

        </div>



        {/* 4th box end  */}

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
            <input className='px-2 border h-4 mt-1 border-black' type="text"></input>
          </div>
          <div className='flex w-4/6 justify-between'>
            <p>Quality Checked by</p>
            <input className='px-2 border h-4 mt-1 border-black' type="text"></input>
          </div>
          <div className='flex w-4/6 justify-between mt-2'>
            <p>Date Sent</p>
            <input className='px-2 h-4 mt-1 border border-black' type="text"></input>
          </div>
        </div>

        <div className='grid grid-cols-2 mt-4'>
          <div className='flex w-4/6 justify-between mt-2'>
            <p className='font-semibold'>Project completed</p>
            <input className='px-2 h-4 mt-1 border border-black' type="text"></input>
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
          <span className="bg-black text-red-500 py-1 h-10 text-xl px-6 rounded-full font-bold">Submit</span>
        </div>

      </div>
    </>
  )
}

export default App;
