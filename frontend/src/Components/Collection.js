const Collection = () => {
  return (
    <>
      <section className="bnd-collection">
		<div className="bnd-row">
			<h3 className="pro-title">Products Collection</h3>
		</div>
		<div className="bnd-row">

			<div className="collection-slider">
				<div className="collection-wrapper">

					
					<div className="collection-col">
						<div className="cat-bandana collection-cat">
							<div className="box-collection">
								<img src="../images/bandanaicon.svg" alt="bandanaicon" /> 
							</div>
							<h3 className="collection-title">Bandannas</h3>
						</div>
					</div>
					
					
					<div className="collection-col">
						<div className="cat-facemask collection-cat">
							<div className="box-collection">
								<img src="../images/maskicon.svg" alt="maskicon" />
							</div>
							<h3 className="collection-title">Face Masks</h3>
						</div>
					</div>
					
					
					<div className="collection-col">
						<div className="cat-pens collection-cat">
							<div className="box-collection">
								<img src="../images/pen-icon.svg" alt="pen-icon" />
							</div>
							<h3 className="collection-title">Pens</h3>
						</div>
					</div>
					
					
				</div>
			</div>
		</div>
	</section>


    </>
  )
}

export default Collection
	
    