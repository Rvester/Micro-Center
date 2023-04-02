const express = require("express");
const micro = require("../models/micro");
const seed = require("../models/seed");

const showAllMicro = (req, res) => {
  micro.find({}, (err, foundMicro) => {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).render("Index", { micro: foundMicro });
    }
  });
};

const newMicro = (req, res) => {
  res.render("New");
};

const deleteMicro = (req, res) => {
  console.log(req.params + "hello");
  micro.findByIdAndDelete(req.params.id, (err, deleteMicro) => {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).redirect("/seed");
    }
  });
};

const updateMicro = (req, res) => {
  micro.findByIdAndUpdate(req.params.id, req.body, (err, updateMicro) => {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).redirect(`/micro/${req.params.id}`);
    }
  });
};

const createMicro = (req, res) => {
  micro.create(req.body, (err, createdMicro) => {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).redirect("/micro/index");
    }
  });
};

const editMicro = (req, res) => {
  micro.findById(req.params.id, (err, editMicro) => {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).render("Edit", { micro: editMicro });
    }
  });
};

const seedMicro = (req, res) => {
  console.log(seed);
  micro.deleteMany({}, (err, deleteMicro) => {
    if (err) {
      res.status(400).json(err);
    } else {
      console.log(seed);
      micro.create(seed, (err, createdMicro) => {
        if (err) {
          res.status(400).json(err);
        } else {
          res.status(200).redirect("/micro");
        }
      });
    }
  });
};

const showMicro = (req, res) => {
  console.log(req);
  res.status(200).render("Show", seed[req.params.id]);
  //(err, showMicro) => {
  //         if (err){
  //             res.status(400).json(err)
  //         }else {
  //             res.status(200).render('Show', {product: [Number(seed)]})
  //         }
  //     })
};

module.exports = {
  showAllMicro,
  newMicro,
  deleteMicro,
  updateMicro,
  createMicro,
  editMicro,
  seedMicro,
  showMicro,
};
