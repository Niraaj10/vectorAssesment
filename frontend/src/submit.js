// submit.js
import { useStore } from './store';
import { shallow } from 'zustand/shallow';

const selector = (state) => ({
    nodes: state.nodes,
    edges: state.edges,
});

export const SubmitButton = () => {
    const { nodes, edges } = useStore(selector, shallow);


    const handleSubmit = async () => {
        try {
            console.log("Nodes :", nodes);
            console.log("Edges :", edges);
            const response = await fetch('http://localhost:8000/pipelines/parse', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nodes, edges }),
            });

            if (response.ok) {
                const result = await response.json();
                alert(
                    `Pipeline Analysis:\n` +
                    `- Nodes: ${result.num_nodes}\n` +
                    `- Edges: ${result.num_edges}\n` +
                    `- Is DAG: ${result.is_dag ? 'Yes' : 'No'}`
                );
            } else {
                alert('Error parsing pipeline');
            }
        } catch (error) {
            console.error('Submission failed:', error);
            alert('Failed to connect to the backend.');
        }
    };

    return (
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50">
            <button
                onClick={handleSubmit}
                className="relative px-8 py-3 bg-[linear-gradient(249deg,rgb(9,133,223)_0%,rgb(67,11,138)_83.1421%)] border-t border-[#0095ffd4] text-white font-bold rounded-full duration-300 filter brightness-100 hover:brightness-[0.80] transition-all transform "
            >
                Submit Pipeline
            </button>
        </div>
    );
};
