import Map "mo:core/Map";
import Text "mo:core/Text";
import Time "mo:core/Time";
import Array "mo:core/Array";
import Iter "mo:core/Iter";
import Runtime "mo:core/Runtime";
import Order "mo:core/Order";

actor {
  type SubmissionId = Text;
  type Email = Text;

  type Submission = {
    id : SubmissionId;
    name : Text;
    email : Email;
    phone : Text;
    message : Text;
    serviceType : Text;
    propertyAddress : Text;
    preferredDate : Text;
    timestamp : Time.Time;
  };

  module Submission {
    public func compare(submission1 : Submission, submission2 : Submission) : Order.Order {
      Text.compare(submission1.id, submission2.id);
    };
  };

  let submissions = Map.empty<SubmissionId, Submission>();

  public shared ({ caller }) func submitForm(
    name : Text,
    email : Email,
    phone : Text,
    message : Text,
    serviceType : Text,
    propertyAddress : Text,
    preferredDate : Text,
  ) : async SubmissionId {
    let id = email.concat(Time.now().toText());
    let submission : Submission = {
      id;
      name;
      email;
      phone;
      message;
      serviceType;
      propertyAddress;
      preferredDate;
      timestamp = Time.now();
    };
    submissions.add(id, submission);
    id;
  };

  public query ({ caller }) func getAllSubmissions() : async [Submission] {
    submissions.values().toArray().sort();
  };

  public query ({ caller }) func getSubmissionById(id : SubmissionId) : async Submission {
    switch (submissions.get(id)) {
      case (null) { Runtime.trap("Submission not found") };
      case (?submission) { submission };
    };
  };
};
