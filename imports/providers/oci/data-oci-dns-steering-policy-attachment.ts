// https://www.terraform.io/docs/providers/oci/r/data_oci_dns_steering_policy_attachment.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "compartment_id": {
        "type": "string",
        "computed": true
      },
      "display_name": {
        "type": "string",
        "computed": true
      },
      "domain_name": {
        "type": "string",
        "computed": true
      },
      "id": {
        "type": "string",
        "computed": true
      },
      "rtypes": {
        "type": [
          "list",
          "string"
        ],
        "computed": true
      },
      "self": {
        "type": "string",
        "computed": true
      },
      "state": {
        "type": "string",
        "computed": true
      },
      "steering_policy_attachment_id": {
        "type": "string",
        "required": true
      },
      "steering_policy_id": {
        "type": "string",
        "computed": true
      },
      "time_created": {
        "type": "string",
        "computed": true
      },
      "zone_id": {
        "type": "string",
        "computed": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataOciDnsSteeringPolicyAttachmentConfig extends TerraformMetaArguments {
  readonly steeringPolicyAttachmentId: string;
}

// Resource

export class DataOciDnsSteeringPolicyAttachment extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciDnsSteeringPolicyAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_dns_steering_policy_attachment',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._steeringPolicyAttachmentId = config.steeringPolicyAttachmentId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // display_name - computed: true, optional: false, required: true
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // domain_name - computed: true, optional: false, required: true
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // rtypes - computed: true, optional: false, required: true
  public get rtypes() {
    return this.getListAttribute('rtypes');
  }

  // self - computed: true, optional: false, required: true
  public get selfAttribute() {
    return this.getStringAttribute('self');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // steering_policy_attachment_id - computed: false, optional: false, required: true
  private _steeringPolicyAttachmentId: string;
  public get steeringPolicyAttachmentId() {
    return this._steeringPolicyAttachmentId;
  }
  public set steeringPolicyAttachmentId(value: string) {
    this._steeringPolicyAttachmentId = value;
  }

  // steering_policy_id - computed: true, optional: false, required: true
  public get steeringPolicyId() {
    return this.getStringAttribute('steering_policy_id');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // zone_id - computed: true, optional: false, required: true
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      steering_policy_attachment_id: this._steeringPolicyAttachmentId,
    };
  }
}
