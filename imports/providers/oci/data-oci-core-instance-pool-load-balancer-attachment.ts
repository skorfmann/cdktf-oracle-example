// https://www.terraform.io/docs/providers/oci/r/data_oci_core_instance_pool_load_balancer_attachment.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "backend_set_name": {
        "type": "string",
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "instance_pool_id": {
        "type": "string",
        "required": true
      },
      "instance_pool_load_balancer_attachment_id": {
        "type": "string",
        "required": true
      },
      "load_balancer_id": {
        "type": "string",
        "computed": true
      },
      "port": {
        "type": "number",
        "computed": true
      },
      "state": {
        "type": "string",
        "computed": true
      },
      "vnic_selection": {
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

export interface DataOciCoreInstancePoolLoadBalancerAttachmentConfig extends TerraformMetaArguments {
  readonly instancePoolId: string;
  readonly instancePoolLoadBalancerAttachmentId: string;
}

// Resource

export class DataOciCoreInstancePoolLoadBalancerAttachment extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciCoreInstancePoolLoadBalancerAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_instance_pool_load_balancer_attachment',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._instancePoolId = config.instancePoolId;
    this._instancePoolLoadBalancerAttachmentId = config.instancePoolLoadBalancerAttachmentId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backend_set_name - computed: true, optional: false, required: true
  public get backendSetName() {
    return this.getStringAttribute('backend_set_name');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // instance_pool_id - computed: false, optional: false, required: true
  private _instancePoolId: string;
  public get instancePoolId() {
    return this._instancePoolId;
  }
  public set instancePoolId(value: string) {
    this._instancePoolId = value;
  }

  // instance_pool_load_balancer_attachment_id - computed: false, optional: false, required: true
  private _instancePoolLoadBalancerAttachmentId: string;
  public get instancePoolLoadBalancerAttachmentId() {
    return this._instancePoolLoadBalancerAttachmentId;
  }
  public set instancePoolLoadBalancerAttachmentId(value: string) {
    this._instancePoolLoadBalancerAttachmentId = value;
  }

  // load_balancer_id - computed: true, optional: false, required: true
  public get loadBalancerId() {
    return this.getStringAttribute('load_balancer_id');
  }

  // port - computed: true, optional: false, required: true
  public get port() {
    return this.getNumberAttribute('port');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // vnic_selection - computed: true, optional: false, required: true
  public get vnicSelection() {
    return this.getStringAttribute('vnic_selection');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      instance_pool_id: this._instancePoolId,
      instance_pool_load_balancer_attachment_id: this._instancePoolLoadBalancerAttachmentId,
    };
  }
}
