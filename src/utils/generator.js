import { prefixes, roots, suffixes } from '../data/names';
import { sectors } from '../data/sectors';
import { sloganTemplates, sloganWords } from '../data/slogans';
import { pitchTemplates, pitchWords } from '../data/pitches';

const rand = (arr) => arr[Math.floor(Math.random() * arr.length)];

export const generateName = () => {
  const prefix = rand(prefixes);
  const root = rand(roots);
  const suffix = rand(suffixes);
  return `${prefix}${root}${suffix}`;
};

export const generateSector = () => rand(sectors);

export const generateSlogan = () => {
  let template = rand(sloganTemplates);
  return template.replace(/\{(\w+)\}/g, (_, key) => {
    return sloganWords[key] ? rand(sloganWords[key]) : key;
  });
};

export const generatePitch = (nombre) => {
  let template = rand(pitchTemplates);
  return template.replace(/\{(\w+)\}/g, (_, key) => {
    if (key === 'nombre') return nombre;
    return pitchWords[key] ? rand(pitchWords[key]) : key;
  });
};

export const generateLogo = () => {
  const shapes = ['circle', 'hexagon', 'triangle', 'square', 'diamond'];
  const gradients = [
    ['#6366f1', '#8b5cf6'],
    ['#06b6d4', '#3b82f6'],
    ['#10b981', '#06b6d4'],
    ['#f59e0b', '#ef4444'],
    ['#ec4899', '#8b5cf6'],
    ['#14b8a6', '#6366f1'],
    ['#f97316', '#ec4899'],
  ];
  return {
    shape: rand(shapes),
    colors: rand(gradients),
  };
};

export const generateStartup = () => {
  const name = generateName();
  return {
    name,
    sector: generateSector(),
    slogan: generateSlogan(),
    pitch: generatePitch(name),
    logo: generateLogo(),
  };
};