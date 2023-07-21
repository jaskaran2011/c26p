class rope{
	constructor(body1,body2, offsetX)
	{
		var options={
			bodyA:body1,
			bodyB:body2
		}

		this.rope=Constraint.create(options)
		World.add(world,this.rope)

		this.offsetX = offsetX
	}

	display()
	{
		var pointA=this.rope.bodyA.position;
		var pointB=this.rope.bodyB.position;

		strokeWeight(2);

		//WRITE THE CORRECT CODE TO RENDER A LINE BETWEEN THE TWO BODIES
        con1=Matter.Constraint.create({
			bodyA:bob1,
			bodyB:rope1,
			length:100,
			stiffness:0.1,
			});
			World.add(world,con1);
			con2=Matter.Constraint.create({
				bodyA:bob2,
				bodyB:rope2,
				length:100,
				stiffness:0.1,
				});
				World.add(world,con2); 
				 con3=Matter.Constraint.create({
					bodyA:bob3,
					bodyB:brope3,
					length:100,
					stiffness:0.1,
					});
					World.add(world,con3);
					con4=Matter.Constraint.create({
						bodyA:bob4,
						bodyB:rope4,
						length:100,
						stiffness:0.1,
						});
						World.add(world,con4);
						con5=Matter.Constraint.create({
							bodyA:bob5,
							bodyB:rope5,
							length:100,
							stiffness:0.1,
							});
							World.add(world,con5);
	}

}