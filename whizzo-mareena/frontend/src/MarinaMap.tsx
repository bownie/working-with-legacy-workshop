import createEngine, { DiagramModel, DefaultNodeModel, DefaultDiagramState } from '@projectstorm/react-diagrams';
import * as React from 'react';
import { CanvasWidget } from '@projectstorm/react-canvas-core';
import { DemoCanvasWidget } from './helpers/DemoCanvasWidget';
import "./index.css";


const MarinaMap = () => {
	//1) setup the diagram engine
	var engine = createEngine();

	// ############################################ MAGIC HAPPENS HERE
	const state = engine.getStateMachine().getCurrentState();
	if (state instanceof DefaultDiagramState) {
		state.dragNewLink.config.allowLooseLinks = false;
	}
	// ############################################ MAGIC HAPPENS HERE

	//2) setup the diagram model
	var model = new DiagramModel();

	//3-A) create a default node
	var node1 = new DefaultNodeModel('Pontoon 1', 'rgb(0,192,255)');
	var port1_1 = node1.addOutPort('A1');
	var port1_2 = node1.addOutPort('A2');
	//port1_2.setSelected();
	node1.setPosition(100, 100);
	node1.setLocked(true);

	//3-B) create another default node
	var node2 = new DefaultNodeModel('Node 2', 'rgb(192,255,0)');
	var port2 = node2.addInPort('In');
	node2.setPosition(400, 100);

	//3-C) link the 2 nodes together
	//var link1 = port1.link(port2);

	//3-D) create an orphaned node
	var node3 = new DefaultNodeModel('Node 3', 'rgb(0,192,255)');
	node3.addOutPort('Out');
	node3.setPosition(100, 200);

	//4) add the models to the root graph
	model.addAll(node1, node2, node3);

	//5) load model into engine
	engine.setModel(model);

	//6) render the diagram!
	return (
		<DemoCanvasWidget>
      <div style={{ height: "100vh", width: "100vw", backgroundColor: "aliceblue", display: "grid"}}>
  			<CanvasWidget className="canvas" engine={engine} />
      </div>
		</DemoCanvasWidget>
	);
};

export default MarinaMap;