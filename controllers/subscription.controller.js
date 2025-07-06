import { WorkflowContext } from "@upstash/workflow";
import Subscription from "../models/subscription.model.js";
import mongoose from 'mongoose';

/**
 * Create a new subscription linked to the authenticated user.
 */
export const createSubscription = async (req, res, next) => {
  try {
    // Create a new subscription document with data from request body and user from token
    const subscription = await Subscription.create({
      ...req.body,
      user: req.user._id,
    });
    const {workflowRunId} =await WorkflowContext.trigger({
      url:`${SERVER_URL}/api/v1/workflows/subscription/reminder`,
      body:{
        subscriptionId:subscription.id,
      },
      headers:{
        'content-type':'application/json',
      },
      retries:0,
    })
    // Respond with the created subscription
    res.status(201).json({ success: true, data: subscription });
  } catch (e) {
    // Pass any errors to the error handling middleware
    next(e);
  }
};

/**
 * Get all subscriptions for the authenticated user.
 * Ensures the user requesting matches the userId in the params.
 */
export const getUserSubscriptions = async (req, res, next) => {
  try {
    // Convert user ID from JWT token to string
    const userIdFromToken = req.user._id.toString();

    // Trim whitespace from user ID in URL parameters
    const userIdFromParams = req.params.id.trim();

    // Check that the userId from token matches the userId from URL params
    if (userIdFromToken !== userIdFromParams) {
      const error = new Error('You are not the owner of this Account');
      error.status = 401; 
      throw error;
    }

    // Fetch all subscriptions belonging to this user
    const subscriptions = await Subscription.find({ user: userIdFromParams });

    // Send back the list of subscriptions
    res.status(200).json({ success: true, data: subscriptions });
  } catch (e) {
    // Pass any errors to the error handling middleware
    next(e);
  }
};
