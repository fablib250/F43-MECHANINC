import React, { useState } from 'react';
import { HolographicPanel } from '../../components/HolographicPanel';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const FormulaReference: React.FC = () => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>('materials');
  
  const categories = [
    {
      id: 'materials',
      name: 'Material Properties',
      formulas: [
        { name: 'Young\'s Modulus', formula: 'E = σ/ε', description: 'Ratio of stress to strain (stiffness)' },
        { name: 'Density', formula: 'ρ = m/V', description: 'Mass per unit volume' },
        { name: 'Thermal Conductivity', formula: 'q = -k∇T', description: 'Heat transfer capability' },
      ]
    },
    {
      id: 'stress',
      name: 'Stress Analysis',
      formulas: [
        { name: 'Normal Stress', formula: 'σ = F/A', description: 'Force per unit area' },
        { name: 'Shear Stress', formula: 'τ = F/A', description: 'Tangential force per unit area' },
        { name: 'Von Mises Stress', formula: 'σv = √(σ₁² + σ₂² - σ₁σ₂)', description: 'Combined stress state' },
      ]
    },
    {
      id: 'thermo',
      name: 'Thermodynamics',
      formulas: [
        { name: 'Heat Capacity', formula: 'Cp = (∂H/∂T)p', description: 'Energy required to raise temperature' },
        { name: 'Enthalpy Change', formula: 'ΔH = Q + W', description: 'Total heat content change' },
        { name: 'Gibbs Free Energy', formula: 'ΔG = ΔH - TΔS', description: 'Spontaneity of a reaction' },
      ]
    },
  ];
  
  return (
    <HolographicPanel title="Engineering Formulas">
      <div className="space-y-3 max-h-96 overflow-y-auto pr-1">
        {categories.map((category) => (
          <div key={category.id} className="border border-cyan-900/30 rounded-md overflow-hidden">
            <button
              className="w-full flex justify-between items-center p-3 bg-cyan-900/20 hover:bg-cyan-900/30 text-left"
              onClick={() => setExpandedCategory(expandedCategory === category.id ? null : category.id)}
            >
              <span className="font-semibold text-cyan-300">{category.name}</span>
              {expandedCategory === category.id ? (
                <ChevronUp className="w-4 h-4 text-cyan-500" />
              ) : (
                <ChevronDown className="w-4 h-4 text-cyan-500" />
              )}
            </button>
            
            {expandedCategory === category.id && (
              <div className="p-3 bg-black/20">
                <div className="space-y-3">
                  {category.formulas.map((formula, index) => (
                    <div key={index} className="text-sm">
                      <div className="font-semibold text-cyan-400">{formula.name}</div>
                      <div className="font-mono text-cyan-300 bg-black/30 px-2 py-1 rounded mt-1 mb-1">
                        {formula.formula}
                      </div>
                      <div className="text-xs text-cyan-500/80">{formula.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </HolographicPanel>
  );
};